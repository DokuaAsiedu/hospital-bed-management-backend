import { PORT } from "./config/config.js"
import express from "express"
import bodyParser from "body-parser"
import { hospitalsRouter, bedsRouter, usersRouter, patientsRouter } from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(PORT || 8080, () => {
  console.log(`App up on port ${PORT}!`)
})

app.get("/", (req, res) => {
  res.send("Hello System!")
})

app.use("/hospitals", hospitalsRouter)
app.use("/beds", bedsRouter)
app.use("/patients", patientsRouter)
app.use("/users", usersRouter)
