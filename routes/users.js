import { Router } from "express"
import { getUsers, addUsers } from "../controllers/index.js"

const usersRouter = Router()

usersRouter.get("/", getUsers)
usersRouter.post("/add", addUsers)

// exports
export {usersRouter}