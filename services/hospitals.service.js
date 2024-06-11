import { Hospital } from "../models/index.js"
import { COLLECTION_IDS_PREFIX, COLLECTION_NAMES } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const hospitalsInstance = new Hospital()
const idPrefix = COLLECTION_IDS_PREFIX.HOSPITALS
const collectionName = COLLECTION_NAMES.HOSPITALS

async function getHospitalsService() {
  const args = {instance: hospitalsInstance, collectionName}
  const docs = await getService(args)
  return docs
}

async function addHospitalsService(reqBody) {
  // console.log("reqbody", reqBody)
  const args = {instance: hospitalsInstance, collectionName, reqBody, idPrefix}
  const result = await addService(args)
  return result
}

async function deleteHospitalsService(reqBody) {
  const args = {instance: hospitalsInstance, reqBody}

  const result = await deleteService(args)

  return result
}

async function changeHospitalNameService(reqBody) {
  const result = await hospitalsInstance.changeHospitalName(reqBody)
  return result
}


export { getHospitalsService, addHospitalsService, deleteHospitalsService, changeHospitalNameService}