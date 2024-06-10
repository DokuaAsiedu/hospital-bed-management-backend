async function getService({instance, filter={}}) {
  const docs = await instance.getDocuments(filter)
  return docs
}

async function addService({instance, reqBody, idPrefix}) {
  const docsCount = await instance.countDocs()
  const docs = reqBody.map((item, index) => {
    const id = docsCount + index + 1
    return {
      ...item,
      _id: idPrefix + id
    }
  })
  const result = await instance.insertDocs(docs)
  return result
}

async function deleteService({instance, reqBody}) {
  const result = await instance.deleteDocs(reqBody)
  return result
}


export { getService, addService, deleteService }