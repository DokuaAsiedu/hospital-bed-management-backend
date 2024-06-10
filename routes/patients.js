import { Router } from "express"
import { getPatientsController, addPatientsController, deletePatientsController, changePatientNameController } from "../controllers/index.js"

const patientsRouter = Router()

patientsRouter.get("/", getPatientsController)
patientsRouter.post("/add", addPatientsController)
patientsRouter.delete("/delete", deletePatientsController)
patientsRouter.patch("/change-name", changePatientNameController)

// exports
export {patientsRouter}