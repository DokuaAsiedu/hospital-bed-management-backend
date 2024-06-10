import { Patient } from "../models/index.js"
import { COLLECTION_IDS_PREFIX } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const patientsInstance = new Patient()
const idPrefix = COLLECTION_IDS_PREFIX.PATIENTS

async function getPatientsService() {
  const args = {instance: patientsInstance}
  const docs = await getService(args)
  return docs
}

async function addPatientsService(reqBody) {
  const args = {instance: patientsInstance, reqBody, idPrefix}
  const result = await addService(args)
  return result
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

async function checkInPatientService(reqBody) {

}


export { getPatientsService, addPatientsService, deletePatientsService, changePatientNameService, checkInPatientService}