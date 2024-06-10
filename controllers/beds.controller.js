import { addBedsService, getBedsService } from "../services/index.js"

async function getBedsController(req, res) {
  try {
    const docs = await getBedsService()

    res.json({
      text: "Hello Beds!",
      data: docs
    })

    console.log("Successfully fetched data from beds collection")
  } catch(err) {
    console.log("Error fetching from beds collection", err)
  }
}

async function addBedsController(req, res) {
  try {
    const result = await addBedsService(req.body)

    res.json({
      text: "Add Beds!",
      data: result
    })

    console.log("Successfully inserted data into beds collection")
  } catch(err) {
    console.log("Error inserting data into beds collection", err)
  }
}

export {getBedsController, addBedsController}