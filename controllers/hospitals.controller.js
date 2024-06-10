import { addHospitalsService, getHospitalsService } from "../services/index.js"

async function getHospitalsController(req, res) {
  try {
    const docs = await getHospitalsService()

    res.json({
      text: "Hello Hospitals!",
      data: docs
    })

    console.log("Successfully fetched data from hospitals collection")
  } catch(err) {
    console.log("Error fetching from hospitals collection", err)
  }
}

async function addHospitalsController(req, res) {
  try {
    const result = await addHospitalsService(req.body)

    res.json({
      text: "Add Hospitals!",
      data: result
    })

    console.log("Successfully inserted data in tp hospitals collection")
  } catch(err) {
    console.log("Error inserting data into hospitals collection", err)
  }
}

export {getHospitalsController, addHospitalsController}