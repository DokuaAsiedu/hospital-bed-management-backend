import { Router } from "express"
import { getUsers } from "../controllers/index.js"

const usersRouter = Router()

usersRouter.get("/", getUsers)

// exports
export {usersRouter}