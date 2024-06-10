import { Bed } from "../models/index.js"
import { COLLECTION_IDS_PREFIX, COLLECTION_NAMES } from "../constants/index.js"
import { getService, addService, deleteService } from "./index.js"

const bedsInstance = new Bed()
const idPrefix = COLLECTION_IDS_PREFIX.BEDS
const collectionName = COLLECTION_NAMES.BEDS

async function getBedsService() {
  try {
    const args = {instance: bedsInstance, collectionName}
    const docs = await getService(args)

    console.log(`Successfully fetched data from ${collectionName} collection`)
    return docs
  } catch(err) {
    console.log(`Error fetching from ${collectionName} collection`, err)
  }
}

async function addBedsService(reqBody) {
  try {
    const args = {instance: bedsInstance, collectionName, reqBody, idPrefix}
    const result = await addService(args)

    console.log(`Successfully inserted data into ${collectionName} collection`)
    return result
  } catch(err) {
    console.log(`Error inserting data into ${collectionName} collection`, err)
  }
}

async function deleteBedsService(reqBody) {
  const args = {instance: bedsInstance, reqBody}

  const result = await deleteService(args)

  return result
}


export { getBedsService, addBedsService, deleteBedsService}