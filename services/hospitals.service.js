import { Hospital } from "../models/index.js"
import { COLLECTION_IDS_PREFIX, COLLECTION_NAMES } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const hospitalsInstance = new Hospital()
const idPrefix = COLLECTION_IDS_PREFIX.HOSPITALS
const collectionName = COLLECTION_NAMES.HOSPITALS

async function getHospitalsService() {
  try {
    const args = {instance: hospitalsInstance, collectionName}
    const docs = await getService(args)

    console.log(`Successfully fetched data from ${collectionName} collection`)
    return docs
  } catch(err) {
    console.log(`Error fetching from ${collectionName} collection`, err)
  }
}

async function addHospitalsService(reqBody) {
  try {
    const args = {instance: hospitalsInstance, collectionName, reqBody, idPrefix}
    const result = await addService(args)

    console.log(`Successfully inserted data into ${collectionName} collection`)
    return result
  } catch(err) {
    console.log(`Error inserting data into ${collectionName} collection`, err)
  }
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