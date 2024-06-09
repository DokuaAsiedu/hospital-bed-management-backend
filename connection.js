import { MongoClient } from "mongodb";
import { URI, DB_NAME } from "./config/config.js";

const client = new MongoClient(URI)

const connectToDatabase = async () => {
  try {
    const connection = await client.connect()
    console.log(`Successfully connected`)
    return connection.db(DB_NAME)
  } catch(err) {
    console.log(`Error connecting: ${err}`)
  }
}

// exports
export {client, connectToDatabase}