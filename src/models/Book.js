import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },   //tipo especifico pro id segundo o mongoose
  title: {
    type: String,
    required: [true, "O titulo do livro é obrigatório"]
  },
  price: {
    type: Number
  },
  pages: {
    type: Number,
    min: [10, "O número de páginas deve estar entre 10 e 5000"],
    max: [5000, "O número de páginas deve estar entre 10 e 5000"]
  },
  publisher: {
    type: String,
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["Cada do Codigo", "Classicos"],
      message: "A editora {VALUE} não é um valor permitido"
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: [true, "A autora/autor é obrigatorio"]
  }    //referencing schema da coleçao onde ta a informaçao buscada
}, { versionKey: false })   //sem versionar o schema

const bookModel = mongoose.model("books", bookSchema)  // passa a coleção e o schema

export default bookModel



