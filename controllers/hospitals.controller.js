import { Hospital } from "../models/hospitals.model.js"

const hospitalsInstance = new Hospital()

async function getHospitals(req, res) {
  try {
    const docs = await hospitalsInstance.getDocuments()

    res.json({
      text: "Hello Hospitals!",
      data: docs
    })

    console.log("Successfully fetched data from hospitals collection")
  } catch(err) {
    console.log("Error fetching from hospitals collection", err)
  }
}

async function addHospitals(req, res) {
  try {
    const result = await hospitalsInstance.insertDocs(req.body)

    res.json({
      text: "Add Hospitals!",
      data: result
    })

    console.log("Successfully inserted data in tp hospitals collection")
  } catch(err) {
    console.log("Error inserting data into hospitals collection", err)
  }
}

export {getHospitals, addHospitals}