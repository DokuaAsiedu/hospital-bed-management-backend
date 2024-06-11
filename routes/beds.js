import { Router } from "express"
import { getBedsController, addBedsController, deleteBedsController } from "../controllers/index.js"
import { HTTP_ROUTES } from "../constants/index.js"

const bedsRouter = Router()

bedsRouter.get("/", getBedsController)
bedsRouter.post(`/${HTTP_ROUTES.ADD}`, addBedsController)
bedsRouter.delete(`/${HTTP_ROUTES.DELETE}`, deleteBedsController)

// exports
export {bedsRouter}