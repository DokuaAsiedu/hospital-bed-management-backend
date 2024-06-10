import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { Base } from "./index.js"

export class Hospital extends Base {
  constructor() {
    super();
    this.collectionName = COLLECTION_NAMES.HOSPITALS
  }

  async changeHospitalName(payload) {
    try {
      // payload should contain name and _id fields
      const filter = {_id: payload._id}
      const update = {"$set": {name: payload.name}}
      console.log(filter, update)
      const collection = await this.connnectToCollection()
      const result = await collection.updateOne(filter, update)
      console.log(`Successfully changed hospital name to ${payload.name}`)
      return result
    } catch (err) {
      console.log(`Error changing ${this.collectionName} name`)
    }
  }
}