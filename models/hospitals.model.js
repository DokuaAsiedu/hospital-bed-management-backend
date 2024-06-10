import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { Base } from "./index.js"

export class Hospital extends Base {
  constructor() {
    super();
    this.collectionName = COLLECTION_NAMES.HOSPITALS
  }
}