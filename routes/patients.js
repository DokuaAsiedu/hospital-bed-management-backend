import { Router } from "express"
import { getPatientsController, addPatientsController, deletePatientsController, changePatientNameController, checkInPatientController, togglePatientCheckInController } from "../controllers/index.js"

const patientsRouter = Router()

patientsRouter.get("/", getPatientsController)
patientsRouter.post("/add", addPatientsController)
patientsRouter.delete("/delete", deletePatientsController)
patientsRouter.patch("/change-name", changePatientNameController)
patientsRouter.post("/check-in", checkInPatientController)
patientsRouter.post("/toggle-check-in", togglePatientCheckInController)

// exports
export {patientsRouter}