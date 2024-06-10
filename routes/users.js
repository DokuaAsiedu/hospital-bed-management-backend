import { Router } from "express"
import { getUsersController, addUsersController, deleteUsersController } from "../controllers/index.js"

const usersRouter = Router()

usersRouter.get("/", getUsersController)
usersRouter.post("/add", addUsersController)
usersRouter.delete("/delete", deleteUsersController)

// exports
export {usersRouter}