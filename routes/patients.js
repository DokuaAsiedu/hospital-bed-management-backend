import { Router } from "express"

const patientsRouter = Router()

patientsRouter.get("/", (req, res) => {
  res.send("Hello Patients!")
})

// exports
export {patientsRouter}