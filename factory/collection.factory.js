import { COLLECTION_NAMES } from "../constants/index.js";
import { Bed, User, Patient, Hospital } from "../models/index.js";

export class CollectionFactory {
  constructor(name) {
    if (name === COLLECTION_NAMES.BEDS) {
      return new Bed()
    } else if (name === COLLECTION_NAMES.USERS) {
      return new User()
    } else if (name === COLLECTION_NAMES.PATIENTS) {
      return new Patient()
    } else if (name === COLLECTION_NAMES.HOSPITALS) {
      return new Hospital()
    }
  }
}