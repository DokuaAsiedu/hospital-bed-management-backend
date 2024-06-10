import { DB_NAME } from "../config/config.js";
import { Connection } from "../connection.js"
import { Db } from "mongodb";
import { DEFAULT_COLLECTIONS } from "../database/reset-db.js";

export class Base {
  collectionName;

  static async resetDb() {
    try {
      let db = await Connection.connectToDb()
      await db.dropDatabase()
      db = new Db(Connection.client, DB_NAME)

      DEFAULT_COLLECTIONS.forEach(async (item) => {
       await db.createCollection(item.name)
       const instance = new item.class_identifier()
       await instance.insertDocs(item.data)
      });
    } catch (err) {
      console.log(`Error resetting database:`, err)
    }
  }

  async connnectToCollection() {
    const db = await Connection.connectToDb()
    return db.collection(this.collectionName)
  }

  async getDocuments() {
    try {
      const collection = await this.connnectToCollection()
      const docs = await collection.find({}).toArray()
      console.log(docs)
      return docs
    } catch(err) {
      console.log(`Error fetching documents from ${this.collectionName} collection:`, err)
    }
  }

  async insertDocs(docs) {
    try {
      const collection = await this.connnectToCollection()
      const result = await collection.insertMany(docs)
      console.log(result)
      return result
    } catch(err) {
      console.log(`Error inserting documents in ${this.collectionName} collection:`, err)
    }
  }

  async updateDocs(data) {
    try {
      const collection = await this.connnectToCollection()
      const id = data.id
    } catch (err) {
      console.log(`Error updating documents with id ${id} in ${this.collectionName} collection:`, err)
    }
  }
}