import { MongoClient } from "mongodb";
import { URI, DB_NAME } from "./config/config.js";

export class Connection {
  static client = new MongoClient(URI)

  static async connectToDb() {
    try {
      const connection = await this.client.connect()
      console.log("Successfully connected to cluster")
      console.log(`Successfully connected to db: ${DB_NAME}`)
      return connection.db(DB_NAME)
    } catch (err) {
      console.log(`Error connecting to cluster: ${err}`)
    }
  }
}
