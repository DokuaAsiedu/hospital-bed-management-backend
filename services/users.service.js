import { Hospital, User } from "../models/index.js"
import { COLLECTION_IDS_PREFIX } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const usersInstance = new User()
const idPrefix = COLLECTION_IDS_PREFIX.USERS

async function getUsersService() {
  const args = {instance: usersInstance}
  const docs = await getService(args)
  return docs
}

async function deleteUsersService(reqBody) {
  const args = {instance: usersInstance, reqBody}

  const result = await deleteService(args)

  return result
}

async function regUserService(user) {
  // console.log("reqbody", user)
  const result = {errors: []}
    
  const {name: username, password, hospital_id} = user
  // console.log(password)
  
  // check if username or password in db
  const usernameMatches = await usersInstance.getDocuments({name: username})
  if (usernameMatches.length) {
    result.errors.push({"username": `username ${username} already in use`})
    return result
  }
  const passwordMatches = await usersInstance.getDocuments({password})
  if (passwordMatches.length) {
    result.errors.push({"password": "password already in use"})
    return result
  }

  // check if hospital id in db
  const hospitalsInstance = new Hospital()
  const hospitalIdMatches = await hospitalsInstance.getDocuments({_id: hospital_id})
  if (!hospitalIdMatches.length) {
    result.errors.push({"not_found": `hospital with id ${hospital_id} not found in database`})
    return result
  }

  else {
    const _id = await usersInstance.countDocs()
    const userData = [{name: username, password, hospital_id, _id}]
  
    result.data = await usersInstance.registerUser(userData)
    // const args = {instance: usersInstance, reqBody: userData, idPrefix}
    // result.data = await addService(args)
    return result
  }

}


export { getUsersService, deleteUsersService, regUserService}