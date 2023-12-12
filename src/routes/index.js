import express from "express"
import booksRoutes from "./BooksRoutes.js"
import authorsRoutes from "./AuthorsRoutes.js"


const routes = (app) => {
    app.route("/").get(
        //middleware: faz o parse das requisições pra json pois vem em string
        app.use(express.json(), booksRoutes, authorsRoutes))
}

export default routes


//ponto inicial pra todas as rotas usadas pela aplicação