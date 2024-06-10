import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { Base } from "./index.js"

export class User extends Base {
  constructor() {
    super();
    this.collectionName = COLLECTION_NAMES.USERS
  }
}