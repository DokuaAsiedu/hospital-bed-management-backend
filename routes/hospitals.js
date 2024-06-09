import { Router } from "express"
import { connectToDatabase } from "../connection.js"

const hospitalsRouter = Router()

hospitalsRouter.get("/", async (req, res) => {
  const db = await connectToDatabase()

  db
  .collection("hospitals")
  .find({})
  .toArray()
  .then(pass => {
    res.json({
      text: "Hello Hospitals!",
      data: pass
    })
  })
  .catch(err => {
    res.send(err)
  })
})

// exports
export {hospitalsRouter}