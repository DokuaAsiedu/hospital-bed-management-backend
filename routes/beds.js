import { Router } from "express"
import { getBedsController, addBedsController, deleteBedsController } from "../controllers/index.js"

const bedsRouter = Router()

bedsRouter.get("/", getBedsController)
bedsRouter.post("/add", addBedsController)
bedsRouter.delete("/delete", deleteBedsController)

// exports
export {bedsRouter}