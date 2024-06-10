import { User } from "../models/users.model.js"

const usersInstance = new User()

async function getUsers(req, res) {
  try {
    const docs = await usersInstance.getDocuments()

    res.json({
      text: "Hello Users!",
      data: docs
    })

    console.log("Successfully fetched data from users collection")
  } catch(err) {
    console.log("Error fetching from users collection", err)
  }
}

async function addUsers(req, res) {
  try {
    const result = await usersInstance.insertDocs(req.body)

    res.json({
      text: "Add Users!",
      data: result
    })

    console.log("Successfully inserted data into users collection")
  } catch(err) {
    console.log("Error inserting data into users collection", err)
  }
}


export {getUsers, addUsers}