import { addBedsService, getBedsService, deleteBedsService } from "../services/index.js"
import { getController, addController, deleteController } from "./index.js"

async function getBedsController(req, res) {
  const docs = await getController({service: getBedsService, query: req.query})

  res.json(docs)
}

async function addBedsController(req, res) {
  // console.log("bed: ",req.body)
  const result = await addController({reqbody: req.body, service: addBedsService})

  res.json(result)
}

async function deleteBedsController(req, res) {
  const args = {reqBody: req.body, service: deleteBedsService}
  const result = await deleteController(args)

  res.json(result)
}

async function getAvailableBedsController() {
  const docs = await getAvailableBedsService()

  res.json(docs)
}

export {getBedsController, addBedsController, deleteBedsController, getAvailableBedsController}