import { Hospital } from "../models/hospitals.model.js"

const hospitalInstance = new Hospital()

async function getHospitals(req, res) {
  try {
    const docs = await hospitalInstance.getDocuments()

    res.json({
      text: "Hello Hospitals!",
      data: docs
    })

    console.log("Successfully fetched data from hospitals collection")
  } catch(err) {
    console.log("Error fetching from hospitals collection", err)
  }
}

export {getHospitals}