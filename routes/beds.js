import { Router } from "express"
import { getBedsController, addBedsController } from "../controllers/index.js"

const bedsRouter = Router()

bedsRouter.get("/", getBedsController)
bedsRouter.post("/add", addBedsController)

// exports
export {bedsRouter}