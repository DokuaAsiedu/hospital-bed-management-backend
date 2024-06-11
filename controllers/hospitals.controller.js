import { addHospitalsService, getHospitalsService, deleteHospitalsService, changeHospitalNameService } from "../services/index.js"
import { getController, addController, deleteController } from "./index.js"

async function getHospitalsController(req, res) {
  const docs = await getController({service: getHospitalsService})

  res.json(docs)
}

async function addHospitalsController(req, res) {
  // console.log("bed: ",req.body)
  const result = await addController({reqbody: req.body, service: addHospitalsService})

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