import { Router } from "express"
import { getHospitalsController, addHospitalsController, deleteHospitalsController, changeHospitalNameController } from "../controllers/index.js"
import { HTTP_ROUTES } from "../constants/http-routes.js"

const hospitalsRouter = Router()

hospitalsRouter.get("/", getHospitalsController)
hospitalsRouter.post(`/${HTTP_ROUTES.ADD}`, addHospitalsController)
hospitalsRouter.delete(`/${HTTP_ROUTES.DELETE}`, deleteHospitalsController)
hospitalsRouter.patch(`/${HTTP_ROUTES.CHANGE_NAME}`, changeHospitalNameController)

// exports
export {hospitalsRouter}