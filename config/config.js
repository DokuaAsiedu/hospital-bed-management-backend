import {config} from "dotenv"
config()

export const URI = process.env.DATABASE_URI
export const PORT = process.env.PORT || 8080
export const DB_NAME = process.env.DB_NAME || "HOSPITAL_BED_MANAGEMENT"
export const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey"