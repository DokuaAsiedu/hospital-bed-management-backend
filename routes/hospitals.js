import { Router } from "express"
import { getHospitals, addHospitals } from "../controllers/index.js"

const hospitalsRouter = Router()

hospitalsRouter.get("/", getHospitals)
hospitalsRouter.post("/add", addHospitals)

// exports
export {hospitalsRouter}