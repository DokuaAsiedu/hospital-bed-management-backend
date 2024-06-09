import { Bed } from "../models/beds.model.js"

const bedsInstance = new Bed()

async function getBeds(req, res) {
  try {
    const docs = await bedsInstance.getDocuments()

    res.json({
      text: "Hello Beds!",
      data: docs
    })

    console.log("Successfully fetched data from beds collection")
  } catch(err) {
    console.log("Error fetching from beds collection", err)
  }
}

export {getBeds}