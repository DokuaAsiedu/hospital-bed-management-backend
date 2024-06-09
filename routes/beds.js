import { Router } from "express"
import { getBeds } from "../controllers/index.js"

const bedsRouter = Router()

bedsRouter.get("/", getBeds)

// exports
export {bedsRouter}