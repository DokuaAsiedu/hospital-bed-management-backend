import { Router } from "express"
import { getHospitalsController, addHospitalsController } from "../controllers/index.js"

const hospitalsRouter = Router()

hospitalsRouter.get("/", getHospitalsController)
hospitalsRouter.post("/add", addHospitalsController)

// exports
export {hospitalsRouter}