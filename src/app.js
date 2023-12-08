import express from "express"
import dbConnect from "./config/dbConnect.js"
import routes from "./routes/index.js";

const connection = await dbConnect();

connection.on("error", (erro) => {
    console.error("erro de conexão", erro)
})

connection.once("open", ()=>{
    console.log("Conexão com a database feita com sucesso!")
})

const app = express()
routes(app)


app.delete("/books/:id", (req, res) => {
    let indexBook = findBookInArray(req.params.id)
    booksList.splice(indexBook, 1)
    res.status(200).send("Livro deletdo com sucesso!")
})


export default app