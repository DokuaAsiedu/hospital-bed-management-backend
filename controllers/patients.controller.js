import { Patient } from "../models/patients.model.js"

const patientsInstance = new Patient()

async function getPatients(req, res) {
  try {
    const docs = await patientsInstance.getDocuments()

    res.json({
      text: "Hello Patientss!",
      data: docs
    })

    console.log("Successfully fetched data from patients collection")
  } catch(err) {
    console.log("Error fetching from patients collection", err)
  }
}

async function addPatients(req, res) {
  try {
    const result = await patientsInstance.insertDocs(req.body)

    res.json({
      text: "Add Patients!",
      data: result
    })

    console.log("Successfully inserted data into patients collection")
  } catch(err) {
    console.log("Error inserting data into patients collection", err)
  }
}


export {getPatients, addPatients}