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
}