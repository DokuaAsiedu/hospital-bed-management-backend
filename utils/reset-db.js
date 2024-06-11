import { DEFAULT_COLLECTIONS } from "../data/db-data.js";
import { PORT } from "../config/config.js";
import { Base } from "../models/index.js";
import { USERS_DATA } from "../data/collections-data.js";
const ip = "http://localhost"

// async function resetDb() {

  const result = await Base.clearDb().then(() => {
    DEFAULT_COLLECTIONS.forEach(async item => {
      const url = `${ip}:${PORT}${item.addRoute}`
      // console.log(item.data)
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(item.data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
    })

  }).then(() => {
    USERS_DATA.forEach(async item => {
      const url = `${ip}:${PORT}/users/reg`
      // console.log(item)
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(item),
        headers:{
          'Content-Type': 'application/json'
        }
      })
    })

  })

// }

// async function regUsers() {
    // register users
// }

// resetDb()
// regUsers()