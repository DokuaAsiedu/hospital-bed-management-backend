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
  if (!reqBody._id) {
    return {message: "No patient id added"}
  }
  const result = await patientsInstance.checkInPatient(reqBody)
  return result
}

async function togglePatientCheckInService(reqBody) {
  if (!reqBody._id) {
    return {message: "No patient id added"}
  }

  if (reqBody.check_in_status === "true") {
    reqBody.check_in_status = true
  } else if (reqBody.check_in_status === "false") {
    reqBody.check_in_status = false
  } else {
    return {message: "Patient check in status not added to request body"}
  }
  const result = await patientsInstance.togglePatientCheckIn(reqBody)
  return result
}


export { getPatientsService, addPatientsService, deletePatientsService, changePatientNameService, checkInPatientService, togglePatientCheckInService}