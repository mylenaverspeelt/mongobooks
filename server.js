import express from "express";

const PORT = 3000

const app = express();

//middleware: faz o parse das requisições pra json pois vem em string
app.use(express.json())

const books = [{ id: 1, title: "Hunguer Games" }, { id: 2, title: "Harry Potter" }]

app.get("/", (req, res) => {
    res.status(200).send("Home")
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.post("/books", (req, res) => {
    books.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso!")
})

app.listen(PORT, () => {
    console.log("Escutando servidor na porta", 3000);
})