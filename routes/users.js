import { Router } from "express"
import { getUsersController, addUsersController } from "../controllers/index.js"

const usersRouter = Router()

usersRouter.get("/", getUsersController)
usersRouter.post("/add", addUsersController)

// exports
export {usersRouter}