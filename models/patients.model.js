import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { Base, Bed } from "./index.js"

export class Patient extends Base {
  constructor() {
    super();
    this.collectionName = COLLECTION_NAMES.PATIENTS
  }

  async changePatientName(payload) {
    try {
      // payload should contain name and _id fields
      const filter = {_id: payload._id}
      const update = {"$set": {name: payload.name}}
      // console.log(filter, update)
      const collection = await this.connnectToCollection()
      const result = await collection.updateOne(filter, update)
      console.log(`Successfully changed patient name to ${payload.name}`)
      return result
    } catch (err) {
      console.log(`Error changing ${this.collectionName} name`)
    }
  }

  async checkInPatient(data) {
    // check if patient already checked in
    const patients = await this.getDocuments(data)
    const patient = patients[0]
    if (patient.bed_id !== null) {
      return {message: `Patient with id: ${data._id} already checked in`}
    }

    // check if a bed is available
    const bedsInstance = new Bed()
    const docs = await bedsInstance.getAvailableBeds()
    if (!docs.length) {
      return {message: "Unable to check in patient due to no beds available"}
    }

    // insert patient_id into first doc
    try {
      const payload = {bed_id: docs[0]._id, patient_id: data._id}
      await bedsInstance.updateBed(payload)
      // console.log("payload", payload)
      const collection = await this.connnectToCollection()
      const result = await collection.updateOne({_id: payload.patient_id}, {"$set": {bed_id: payload.bed_id}})
      console.log(`Successfully checked in patient with id: ${data._id}`)
      return result
    } catch (err) {
      console.log(`Error checking in patient with id: ${data._id}`)
    }
  }

  async togglePatientCheckIn(data) {
    const checkInStatus = data.check_in_status
    const patientFilter = {_id: data._id}

    // get patient from collection
    const patients = await this.getDocuments(patientFilter)
    const patient = patients[0]
    // if checking in while already checked in or checking out while already checked out exit
    if (patient.bed_id === null && !checkInStatus) {
      // if checking out while checked out
      return {message: `Patient with id: ${data._id} already checked out`}
    }
    else if (patient.bed_id !== null && checkInStatus) {
      // if checking in while checked in
      return {message: `Patient with id: ${data._id} already checked in`}
    }

    const bedsInstance = new Bed()
    const bedsFilter = {}
    const payload = {}
    const collection = await this.connnectToCollection()

    if (checkInStatus) {
      // check if a bed is available
      bedsFilter.bed_id = null
      const docs = await bedsInstance.getDocuments(bedsFilter)
      if (!docs.length) {
        return {message: "Unable to check in patient due to no beds available"}
      }

      payload.bed_id = docs[0]._id
      payload.patient_id = data._id
      await bedsInstance.updateBed(payload)
      // insert patient_id into first doc
      try {
        const result = await collection.updateOne({_id: data._id}, {"$set": {bed_id: docs[0]._id}})
        console.log(`Successfully checked in patient with id: ${data._id}`)
        return result
      } catch (err) {
        console.log(`Error checking in patient with id: ${data._id}`)
      }
    }
    else {
      bedsFilter.patient_id = data._id
      const docs = await bedsInstance.getDocuments(bedsFilter)
      payload.bed_id = docs[0]._id
      payload.patient_id = null
      await bedsInstance.updateBed(payload)
      try {
        const result = await collection.updateOne({_id: data._id}, {"$set": {bed_id: null}})
        console.log(`Successfully checked out patient with id: ${data._id}`)
        return result
      } catch (err) {
        console.log(`Error checking out patient with id: ${data._id}`)
      }
    }
  }
}