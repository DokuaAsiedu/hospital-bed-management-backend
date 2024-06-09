import { Router } from "express"

const bedsRouter = Router()

bedsRouter.get("/", (req, res) => {
  res.send("Hello Beds!")
})

// exports
export {bedsRouter}