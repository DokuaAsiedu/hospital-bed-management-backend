import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { Base } from "./index.js"

export class User extends Base {
  constructor() {
    super();
    this.collectionName = COLLECTION_NAMES.USERS
  }

  async registerUser(data) {
    try {
      const result = await this.insertDocs(data)
      console.log(`Successfully registered user:`)
      return result

    } catch (err) {
      console.log(`Error registering user:`, err)
    }
  }
}