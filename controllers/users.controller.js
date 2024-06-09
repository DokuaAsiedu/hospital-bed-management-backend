import { User } from "../models/users.model.js"

const userInstance = new User()

async function getUsers(req, res) {
  try {
    const docs = await userInstance.getDocuments()

    res.json({
      text: "Hello Users!",
      data: docs
    })

    console.log("Successfully fetched data from users collection")
  } catch(err) {
    console.log("Error fetching from users collection", err)
  }
}


export {getUsers}