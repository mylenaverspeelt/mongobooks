import express from "express"
import booksRoutes from "./BooksRoutes.js"
import authorsRoutes from "./AuthorsRoutes.js"


const routes = (app) => {
    app.route("/").get((req, res) =>
        res.status(200).send("Curso de node js"))

        //middleware: faz o parse das requisições pra json pois vem em string
        app.use(express.json(), booksRoutes, authorsRoutes)
}

export default routes