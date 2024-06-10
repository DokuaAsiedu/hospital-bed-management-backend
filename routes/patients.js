import { Router } from "express"
import { getPatientsController, addPatientsController, deletePatientsController } from "../controllers/index.js"

const patientsRouter = Router()

patientsRouter.get("/", getPatientsController)
patientsRouter.post("/add", addPatientsController)
patientsRouter.delete("/delete", deletePatientsController)

// exports
export {patientsRouter}