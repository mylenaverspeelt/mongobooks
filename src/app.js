import express from "express"
import dbConnect from "./config/dbConnect.js"
import routes from "./routes/index.js"
import errorHandler from "./middlewares/errorHandler.js"

const connection = await dbConnect()

connection.on("error", (erro) => {
  console.error("erro de conexão", erro)
})

connection.once("open", () => {
  console.log("Conexão com a database feita com sucesso!")
})

const app = express()
routes(app)

//middleware de erro,
app.use(errorHandler)

export default app

//cria uma aplicação express, listeners pra checar a conexão, configura o modulo routes


