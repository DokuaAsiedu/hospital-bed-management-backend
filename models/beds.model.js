import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { Base } from "./index.js"

export class Bed extends Base {
  constructor() {
    super();
    this.collectionName = COLLECTION_NAMES.BEDS
  }

  async getAvailableBeds() {
    try {
      // const collection = await this.connnectToCollection()
      const docs = await this.getDocuments({patient_id: null})
      console.log(`Successfully returned all available ${this.collectionName}`)
      return docs
    } catch(err) {
      console.log(`Error getting available ${this.collectionName}:`, err)
    }
  }

  async updateBed(payload) {
    try {
      const collection = await this.connnectToCollection()
      const filter = {_id: payload.bed_id}
      const update = {"$set": {patient_id: payload.patient_id}}
      const result = await collection.updateOne(filter, update)
      console.log(`Successfully updated ${this.collectionName} id: ${payload.patient_id}`)
      return result
    } catch (err) {
      console.log(`Error updating ${this.collectionName} with id: ${payload._id}`)
    }
  }
}