import { User } from "../models/index.js"
import { COLLECTION_IDS_PREFIX, COLLECTION_NAMES } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const usersInstance = new User()
const idPrefix = COLLECTION_IDS_PREFIX.USERS
const collectionName = COLLECTION_NAMES.USERS

async function getUsersService() {
  try {
    const args = {instance: usersInstance, collectionName}
    const docs = await getService(args)

    console.log(`Successfully fetched data from ${collectionName} collection`)
    return docs
  } catch(err) {
    console.log(`Error fetching from ${collectionName} collection`, err)
  }
}

async function addUsersService(reqBody) {
  try {
    const args = {instance: usersInstance, collectionName, reqBody, idPrefix}
    const result = await addService(args)

    console.log(`Successfully inserted data into ${collectionName} collection`)
    return result
  } catch(err) {
    console.log(`Error inserting data into ${collectionName} collection`, err)
  }
}

async function deleteUsersService(reqBody) {
  const args = {instance: usersInstance, reqBody}

  const result = await deleteService(args)

  return result
}


export { getUsersService, addUsersService, deleteUsersService}