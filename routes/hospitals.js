import { Router } from "express"
import { getHospitalsController, addHospitalsController, deleteHospitalsController } from "../controllers/index.js"

const hospitalsRouter = Router()

hospitalsRouter.get("/", getHospitalsController)
hospitalsRouter.post("/add", addHospitalsController)
hospitalsRouter.delete("/delete", deleteHospitalsController)

// exports
export {hospitalsRouter}