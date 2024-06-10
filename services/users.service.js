import { User } from "../models/index.js"
import { COLLECTION_IDS_PREFIX } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const usersInstance = new User()
const idPrefix = COLLECTION_IDS_PREFIX.USERS

async function getUsersService() {
  const args = {instance: usersInstance}
  const docs = await getService(args)
  return docs
}

async function addUsersService(reqBody) {
  const args = {instance: usersInstance, reqBody, idPrefix}
  const result = await addService(args)
  return result
}

async function deleteUsersService(reqBody) {
  const args = {instance: usersInstance, reqBody}

  const result = await deleteService(args)

  return result
}


export { getUsersService, addUsersService, deleteUsersService}