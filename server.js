import express from "express"

const PORT = 3000

const app = express()

//middleware: faz o parse das requisições pra json pois vem em string
app.use(express.json())

const booksList = [{ id: 1, title: "Hunguer Games" }, { id: 2, title: "Harry Potter" }]

app.get("/", (req, res) => {
    res.status(200).send("Home")
})

app.get("/books", (req, res) => {
    res.status(200).json(booksList)
})

app.post("/books", (req, res) => {
    booksList.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso!")
})

function findBookInArray(id) {
    let index = booksList.findIndex(item => item.id === Number(id))
    return index
}

// : é pra indicar uma variavel
app.get("/books/:id", (req, res) => {
    let indexBook = findBookInArray(req.params.id)
    res.status(200).json(booksList[indexBook])
})

app.put("/books/:id", (req, res)=>{
    let indexBook = findBookInArray(req.params.id)
    booksList[indexBook].title = req.body.title
    res.status(200).json(booksList)
})


app.listen(PORT, () => {
    console.log("Escutando servidor na porta", 3000)
})