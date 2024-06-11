import { Router } from "express"
import { getPatientsController, addPatientsController, deletePatientsController, changePatientNameController, checkInPatientController, togglePatientCheckInController } from "../controllers/index.js"
import { HTTP_ROUTES } from "../constants/http-routes.js"

const patientsRouter = Router()

patientsRouter.get("/", getPatientsController)
patientsRouter.post(`/${HTTP_ROUTES.ADD}`, addPatientsController)
patientsRouter.delete(`/${HTTP_ROUTES.DELETE}`, deletePatientsController)
patientsRouter.patch(`/${HTTP_ROUTES.CHANGE_NAME}`, changePatientNameController)
patientsRouter.post(`/${HTTP_ROUTES.CHECK_IN}`, checkInPatientController)
patientsRouter.post(`/${HTTP_ROUTES.TOGGLE_CHECK_IN}`, togglePatientCheckInController)

// exports
export {patientsRouter}