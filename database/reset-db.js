// import { ObjectId } from "mongodb"
import { Base, Bed, Hospital, Patient, User } from "../models/index.js"
import { collection_names } from "../constants/collection-names.js"
import { BEDS_DATA, USERS_DATA, PATIENTS_DATA, HOSPITALS_DATA } from "../data/collections-data.js"

export const DEFAULT_COLLECTIONS = [
  {
    name: collection_names.BEDS,
    data: BEDS_DATA,
    class_identifier: Bed
  },
  {
    name: collection_names.USERS,
    data: USERS_DATA,
    class_identifier: User
  },
  {
    name: collection_names.PATIENTS,
    data: PATIENTS_DATA,
    class_identifier: Patient
  },
  {
    name: collection_names.HOSPITALS,
    data: HOSPITALS_DATA,
    class_identifier: Hospital
  },
]

Base.resetDb()