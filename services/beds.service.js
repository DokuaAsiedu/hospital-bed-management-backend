import { Bed } from "../models/index.js"
import { COLLECTION_IDS_PREFIX } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const bedsInstance = new Bed()
const idPrefix = COLLECTION_IDS_PREFIX.BEDS

async function getBedsService({query={}}) {
  let filter = {}
  if (query.available === 'true') {
    filter.patient_id = null
  } else if (query.available === 'false') {
    filter.patient_id = {"$ne": null}
  }
  const args = {instance: bedsInstance, filter}
  const docs = await getService(args)
  return docs
}

async function addBedsService(reqBody) {
  const args = {instance: bedsInstance, reqBody, idPrefix}
  const result = await addService(args)
  return result
}

async function deleteBedsService(reqBody) {
  const args = {instance: bedsInstance, reqBody}

  const result = await deleteService(args)

  return result
}


export { getBedsService, addBedsService, deleteBedsService }