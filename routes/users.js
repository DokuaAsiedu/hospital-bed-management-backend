import { Router } from "express"
import { getUsersController, deleteUsersController, regUserController } from "../controllers/index.js"
import { encrypt } from "../middleware/crypt.middleware.js"
import { HTTP_ROUTES } from "../constants/http-routes.js"

const usersRouter = Router()

usersRouter.get("/", getUsersController)
usersRouter.delete(`/${HTTP_ROUTES.DELETE}`, deleteUsersController)
usersRouter.post(`/${HTTP_ROUTES.REG}`, encrypt, regUserController)

// exports
export {usersRouter}