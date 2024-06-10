import { Connection } from "../connection.js"

export class Base {
  collectionName;

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
}