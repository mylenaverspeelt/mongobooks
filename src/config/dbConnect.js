import mongoose from "mongoose"
import { config } from "dotenv"

config()

async function dbConnect() {

  mongoose.connect(process.env.DB_CONNECTION_STRING)

  return mongoose.connection
}

export default dbConnect

//realiza a conexão com o mongoDB utilizando o mongoose