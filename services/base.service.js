async function getService({instance, filter={}}) {
  const docs = await instance.getDocuments(filter)
  return docs
}

async function addService({instance, reqBody, idPrefix}) {
  // reqBody.forEach(async elem => {
    console.log(reqBody)
    const docsCount = await instance.countDocs()
    console.log("count:", docsCount)
    const data = reqBody.map((item, index) => {
      const id = docsCount + index + 1
      return {
        ...item,
        _id: idPrefix + id
      }
    })
    const result = await instance.insertDocs(data)
    return result

  // })
}

async function deleteService({instance, reqBody}) {
  const result = await instance.deleteDocs(reqBody)
  return result
}


export { getService, addService, deleteService }