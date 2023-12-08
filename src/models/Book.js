import mongoose, { mongo } from "mongoose"

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },   //tipo especifico pro id segundo o mongoose
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number }
}, { versionKey: false })   //sem versionar o schema


const bookModel = mongoose.model("books", bookSchema)  // passa a coleção e o schema

export default bookModel