import express from "express"
import dbConnect from "./config/dbConnect.js"
import routes from "./routes/index.js"
import errorHandler from "./middlewares/errorHandler.js"
import error404Handler from "./middlewares/error404Handler.js"

const connection = await dbConnect()

connection.on("error", (erro) => {
  console.error("erro de conexão", erro)
})

connection.once("open", () => {
  console.log("conexão com a database feita com sucesso!")
})

const app = express()
//middleware de parse do json
app.use(express.json())
routes(app)

//middlewares de erro
app.use(error404Handler)
app.use(errorHandler)

export default app

//cria uma aplicação express, listeners pra checar a conexão, configura o modulo routes e trata erros de requisiçao


