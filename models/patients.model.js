import { collection_names } from "../constants/collection-names.js"
import { Base } from "./index.js"

export class Patient extends Base {
  constructor() {
    super();
    this.collectionName = collection_names.PATIENTS
  }
}