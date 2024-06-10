import { addPatientsService, getPatientsService, deletePatientsService, changePatientNameService, checkInPatientService } from "../services/index.js"
import { getController, addController, deleteController } from "./index.js"

async function getPatientsController(req, res) {
  const docs = await getController({service: getPatientsService})

  res.json(docs)
}

async function addPatientsController(req, res) {
  const result = await addController({reqbody: req.body, service: addPatientsService})

  res.json(result)
}

async function deletePatientsController(req, res) {
  const args = {reqBody: req.body, service: deletePatientsService}
  const result = await deleteController(args)

  res.json(result)
}

async function changePatientNameController(req, res) {
  const result = await changePatientNameService(req.body)

  res.json(result)
}

async function checkInPatientController(req, res) {
  const result = await checkInPatientService(req.body)
  
  res.json(result)
}

export {getPatientsController, addPatientsController, deletePatientsController, changePatientNameController, checkInPatientController}