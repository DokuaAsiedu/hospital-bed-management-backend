import { getUsersService, deleteUsersService, regUserService } from "../services/index.js"
import { getController, deleteController } from "./index.js"

async function getUsersController(req, res) {
  const docs = await getController({service: getUsersService})

  res.json(docs)
}

async function regUserController(req, res) {
  // console.log("bed: ",req.body)
  const data = await req.body
  const result = await regUserService(data)
  res.json(result)
  
  // data.forEach(async item => {
  // })

}

async function deleteUsersController(req, res) {
  const args = {reqBody: req.body, service: deleteUsersService}
  const result = await deleteController(args)

  res.json(result)
}

export {getUsersController, deleteUsersController, regUserController}