import { Router } from "express"
import { getHospitals } from "../controllers/index.js"

const hospitalsRouter = Router()

hospitalsRouter.get("/", getHospitals)

// exports
export {hospitalsRouter}