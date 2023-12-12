import mongoose, { mongo } from "mongoose"
import { authorSchema } from "./Author.js"

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },   //tipo especifico pro id segundo o mongoose
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
    author: authorSchema    //referencing schema da coleçao onde ta a informaçao buscada
}, { versionKey: false })   //sem versionar o schema


const bookModel = mongoose.model("books", bookSchema)  // passa a coleção e o schema

export default bookModel

