import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const routes = express.Router()

routes.get("/authors", AuthorController.getAuthors)

routes.get("/authors/:id", AuthorController.getAuthorById)

routes.post("/authors", AuthorController.addNewAuthor)

routes.put("/authors/:id", AuthorController.updateAuthorName)

routes.delete("/authors/:id", AuthorController.deleteAuthor)


export default routes