import * as bcrypt from "bcrypt"
const saltRounds = 10;

async function encrypt(req, res, next) {
  console.log("beginning encryption")
  const result = {errors: []}
  // console.log(req.body)
  
  const bool = req.body.name && req.body.password && req.body.hospital_id
  if (!bool) {
    result.errors.push({"missing_fields": "username, password or hospital id missing"})
    console.log("missing fields")
    return res.json(result)
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(req.body.password, salt)

  req.body.password = hash
  next()
  
  // const hashedPasswords = req.body.map(async item => {
  //   const val = await bcrypt.hash(item.password, salt)
  //   return val
  // })

  // Promise
  // .all(hashedPasswords)
  // .then(val => {
  //   const resolved = req.body.map((item, index) => ({
  //     name: item.name,
  //     hospital_id: item.hospital_id,
  //     password: val[index]
  //   }))
  //   // console.log("resolved", resolved)
  //   req.body = resolved
  //   next()
  // })
  // .catch(err => {
  //   console.log(err)
  // })
}


export {encrypt}