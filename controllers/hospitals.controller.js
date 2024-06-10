import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { addHospitalsService, getHospitalsService, deleteHospitalsService, changeHospitalNameService } from "../services/index.js"
import { getController, addController, deleteController } from "./index.js"
const collectionName = COLLECTION_NAMES.HOSPITALS

async function getHospitalsController(req, res) {
  const docs = await getController({collectionName, service: getHospitalsService})

  res.json(docs)
}

async function addHospitalsController(req, res) {
  const result = await addController({reqbody: req.body, collectionName, service: addHospitalsService})

  res.json(result)
}

async function deleteHospitalsController(req, res) {
  const args = {reqBody: req.body, service: deleteHospitalsService}
  const result = await deleteController(args)

  res.json(result)
}

async function changeHospitalNameController(req, res) {
  const result = await changeHospitalNameService(req.body)

  res.json(result)
}

export {getHospitalsController, addHospitalsController, deleteHospitalsController, changeHospitalNameController}