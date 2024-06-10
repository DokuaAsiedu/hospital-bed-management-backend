import { Router } from "express"
import { getPatientsController, addPatientsController } from "../controllers/index.js"

const patientsRouter = Router()

patientsRouter.get("/", getPatientsController)
patientsRouter.post("/add", addPatientsController)

// exports
export {patientsRouter}