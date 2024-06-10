import { addUsersService, getUsersService } from "../services/users.service.js"

// const usersInstance = new User()

async function getUsersController(req, res) {
  try {
    const docs = await getUsersService()

    res.json({
      text: "Hello Users!",
      data: docs
    })

    console.log("Successfully fetched data from users collection")
  } catch(err) {
    console.log("Error fetching from users collection", err)
  }
}

async function addUsersController(req, res) {
  try {
    const result = await addUsersService(req.body)

    res.json({
      text: "Add Users!",
      data: result
    })

    console.log("Successfully inserted data into users collection")
  } catch(err) {
    console.log("Error inserting data into users collection", err)
  }
}


export {getUsersController, addUsersController}