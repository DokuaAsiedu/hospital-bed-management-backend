async function getService({instance, collectionName}) {
  try {
    const docs = await instance.getDocuments()

    console.log(`Successfully fetched data from ${collectionName} collection`)
    return docs
  } catch(err) {
    console.log(`Error fetching from ${collectionName} collection`, err)
  }
}

async function addService({instance, collectionName, reqBody, idPrefix}) {
  try {
    const docsCount = await instance.countDocs()
    const docs = reqBody.map((item, index) => {
      const id = docsCount + index + 1
      return {
        ...item,
        _id: idPrefix + id
      }
    })
    const result = await instance.insertDocs(docs)

    console.log(`Successfully inserted data into ${collectionName} collection`)
    return result
  } catch(err) {
    console.log(`Error inserting data into ${collectionName} collection`, err)
  }
}


export { getService, addService}