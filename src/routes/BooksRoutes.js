import express from "express";
import BookController from "../controllers/BookController.js";

const routes = express.Router()

routes.get("/books", BookController.getBooks)

routes.get("/books/:id", BookController.getBookById)

routes.post("/books", BookController.addNewBook)

routes.put("/books/:id", BookController.updateBookTitle)

export default routes