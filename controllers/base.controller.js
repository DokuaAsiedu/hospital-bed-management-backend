async function getController({collectionName, service}) {
  try {
    const docs = await service()
    
    console.log(`Successfully fetched data from ${collectionName} collection`)

    return {
      "text": "getting",
      data: docs
    }
  } catch(err) {
    console.log(`Error fetching from ${collectionName} collection`, err)
  }
}

async function addController({reqbody, collectionName, service}) {
  try {
    const result = await service(reqbody)

    console.log(`Successfully inserted data into ${collectionName} collection`)

    return {
      text: "adding",
      data: result
    }
  } catch(err) {
    console.log(`Error inserting data into ${collectionName} collection`, err)
  }
}

async function deleteController({reqBody, service}) {
  const result = await service(reqBody)
  return result
}

export {getController, addController, deleteController}