import { addPatientsService, getPatientsService } from "../services/index.js"

async function getPatientsController(req, res) {
  try {
    const docs = await getPatientsService()

    res.json({
      text: "Hello Patientss!",
      data: docs
    })

    console.log("Successfully fetched data from patients collection")
  } catch(err) {
    console.log("Error fetching from patients collection", err)
  }
}

async function addPatientsController(req, res) {
  try {
    const result = await addPatientsService(req.body)

    res.json({
      text: "Add Patients!",
      data: result
    })

    console.log("Successfully inserted data into patients collection")
  } catch(err) {
    console.log("Error inserting data into patients collection", err)
  }
}


export {getPatientsController, addPatientsController}