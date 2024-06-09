import { Router } from "express"
import { getPatients } from "../controllers/index.js"

const patientsRouter = Router()

patientsRouter.get("/", getPatients)

// exports
export {patientsRouter}