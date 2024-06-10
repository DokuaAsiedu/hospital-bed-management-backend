import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { Base } from "./index.js"

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
      console.log(filter, update)
      const collection = await this.connnectToCollection()
      const result = await collection.updateOne(filter, update)
      console.log(`Successfully changed patient name to ${payload.name}`)
      return result
    } catch (err) {
      console.log(`Error changing ${this.collectionName} name`)
    }
  }
}