import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { addUsersService, getUsersService, deleteUsersService } from "../services/index.js"
import { getController, addController, deleteController } from "./index.js"
const collectionName = COLLECTION_NAMES.USERS

async function getUsersController(req, res) {
  const docs = await getController({collectionName, service: getUsersService})

  res.json(docs)
}

async function addUsersController(req, res) {
  const result = await addController({reqbody: req.body, collectionName, service: addUsersService})

  res.json(result)
}

async function deleteUsersController(req, res) {
  const args = {reqBody: req.body, service: deleteUsersService}
  const result = await deleteController(args)

  res.json(result)
}

export {getUsersController, addUsersController, deleteUsersController}