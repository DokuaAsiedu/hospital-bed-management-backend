import { Patient } from "../models/index.js"
import { COLLECTION_IDS_PREFIX, COLLECTION_NAMES } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const patientsInstance = new Patient()
const idPrefix = COLLECTION_IDS_PREFIX.PATIENTS
const collectionName = COLLECTION_NAMES.PATIENTS

async function getPatientsService() {
  try {
    const args = {instance: patientsInstance, collectionName}
    const docs = await getService(args)

    console.log(`Successfully fetched data from ${collectionName} collection`)
    return docs
  } catch(err) {
    console.log(`Error fetching from ${collectionName} collection`, err)
  }
}

async function addPatientsService(reqBody) {
  try {
    const args = {instance: patientsInstance, collectionName, reqBody, idPrefix}
    const result = await addService(args)

    console.log(`Successfully inserted data into ${collectionName} collection`)
    return result
  } catch(err) {
    console.log(`Error inserting data into ${collectionName} collection`, err)
  }
}

async function deletePatientsService(reqBody) {
  const args = {instance: patientsInstance, reqBody}

  const result = await deleteService(args)

  return result
}

async function changePatientNameService(reqBody) {
  const result = await patientsInstance.changePatientName(reqBody)
  return result
}


export { getPatientsService, addPatientsService, deletePatientsService, changePatientNameService}