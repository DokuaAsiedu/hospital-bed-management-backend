import { Base } from "../models/index.js"
import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { BEDS_DATA, USERS_DATA, PATIENTS_DATA, HOSPITALS_DATA } from "../data/collections-data.js"

export const DEFAULT_COLLECTIONS = [
  {
    name: COLLECTION_NAMES.BEDS,
    data: BEDS_DATA
  },
  {
    name: COLLECTION_NAMES.USERS,
    data: USERS_DATA
  },
  {
    name: COLLECTION_NAMES.PATIENTS,
    data: PATIENTS_DATA
  },
  {
    name: COLLECTION_NAMES.HOSPITALS,
    data: HOSPITALS_DATA
  },
]

export function resetDb() {
  Base.resetDb()
}