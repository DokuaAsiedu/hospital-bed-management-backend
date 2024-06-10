import { Router } from "express"
import { getHospitalsController, addHospitalsController, deleteHospitalsController, changeHospitalNameController } from "../controllers/index.js"

const hospitalsRouter = Router()

hospitalsRouter.get("/", getHospitalsController)
hospitalsRouter.post("/add", addHospitalsController)
hospitalsRouter.delete("/delete", deleteHospitalsController)
hospitalsRouter.patch("/change-name", changeHospitalNameController)

// exports
export {hospitalsRouter}