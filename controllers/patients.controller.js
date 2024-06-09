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


export {getPatients}