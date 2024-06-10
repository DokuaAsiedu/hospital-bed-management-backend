async function getController({service, query={}}) {
  const docs = await service({query})

  return {
    "text": "getting",
    data: docs
  }
}

async function addController({reqbody, service}) {
  const result = await service(reqbody)

  return {
    text: "adding",
    data: result
  }
}

async function deleteController({reqBody, service}) {
  const result = await service(reqBody)
  return result
}

export {getController, addController, deleteController}