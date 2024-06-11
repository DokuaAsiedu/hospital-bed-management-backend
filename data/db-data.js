import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { HTTP_ROUTES } from "../constants/http-routes.js"
import { addBedsController, addHospitalsController, addPatientsController } from "../controllers/index.js"
import { BEDS_DATA, USERS_DATA, PATIENTS_DATA, HOSPITALS_DATA } from "./collections-data.js"

const {BEDS, USERS, HOSPITALS, PATIENTS} = COLLECTION_NAMES
const {ADD, REG} = HTTP_ROUTES

export const DEFAULT_COLLECTIONS = [
  {
    name: HOSPITALS,
    data: HOSPITALS_DATA,
    addRoute: `/${HOSPITALS}/${ADD}`,
    controller: addHospitalsController
  },
  {
    name: BEDS,
    data: BEDS_DATA,
    addRoute: `/${BEDS}/${ADD}`,
    controller: addBedsController
  },
  // {
  //   name: USERS,
  //   data: USERS_DATA,
  //   addRoute: `/${USERS}/${REG}`,
  //   controller: addUsersController
  // },
  {
    name: PATIENTS,
    data: PATIENTS_DATA,
    addRoute: `/${PATIENTS}/${ADD}`,
    controller: addPatientsController
  },
]