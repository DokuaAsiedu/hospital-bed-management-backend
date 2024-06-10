import { Router } from "express"
import { getBeds, addBeds } from "../controllers/index.js"

const bedsRouter = Router()

bedsRouter.get("/", getBeds)
bedsRouter.post("/add", addBeds)

// exports
export {bedsRouter}