import express from "express";
import BookController from "../controllers/BookController";

const routes = express.Router()

routes.get("/books", BookController.getBooks)

