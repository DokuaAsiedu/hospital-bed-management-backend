import { Router } from "express"
import { getPatients, addPatients } from "../controllers/index.js"

const patientsRouter = Router()

patientsRouter.get("/", getPatients)
patientsRouter.post("/add", addPatients)

// exports
export {patientsRouter}