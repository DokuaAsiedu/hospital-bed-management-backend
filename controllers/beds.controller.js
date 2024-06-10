import { COLLECTION_NAMES } from "../constants/collection-names.js"
import { addBedsService, getBedsService, deleteBedsService } from "../services/index.js"
import { getController, addController, deleteController } from "./index.js"

const collectionName = COLLECTION_NAMES.BEDS

async function getBedsController(req, res) {
  const docs = await getController({collectionName, service: getBedsService})
  
  res.json(docs)
}

async function addBedsController(req, res) {
  const result = await addController({reqbody: req.body, collectionName, service: addBedsService})

  res.json(result)
}

async function deleteBedsController(req, res) {
  const args = {reqBody: req.body, service: deleteBedsService}
  const result = await deleteController(args)

  res.json(result)
}

export {getBedsController, addBedsController, deleteBedsController}