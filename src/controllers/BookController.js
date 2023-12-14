import {authorModel, bookModel}  from "../models/index.js"

//classe com todos os metodos de req/res referentes a entidade book

class BookController {
  static async getBooks(req, res, next) {
    try {
      const booksList = await bookModel.find({})
      res.status(200).json(booksList)
    } catch (error) {
      next(error)
    }
  }

  static async getBookById(req, res, next) {
    try {
      const id = req.params.id
      const book = await bookModel.findById(id)
      res.status(200).json(book)
    } catch (error) {
      next(error)
    }
  }

  static async updateBookTitle(req, res, next) {
    try {
      const id = req.params.id
      const title = req.body
      await bookModel.findByIdAndUpdate(id, title)
      res.status(200).send("livro atualizado com sucesso")
    } catch (error) {
      next(error)
    }
  }

  static async addNewBook(req, res, next) {

    const newBook = req.body

    try {
      const authorFound = await authorModel.findById(newBook.author)
      const completeBook = { ...newBook, author: { ...authorFound._doc } }    //._doc pra acessar as informações especificas pois o mongo retorna muitas infos no json
      const createdBook = await bookModel.create(completeBook)  //só dar o create após o objeto ser criado por completo (newBook + authorFound)
      res.status(201).json({ message: "liro criado com sucesso!", book: createdBook })
    } catch (error) {
      next(error)
    }
  }

  static async deleteBook(req, res, next) {
    try {
      const id = req.params.id
      await bookModel.findByIdAndDelete(id)
      res.status(201).send("livro excluido com sucesso!")
    } catch (error) {
      next(error)
    }
  }

  static async listBooksByPublisher(req, res, next) {

    const query = req.query.publisher
    try {
      const booksByPublisher = await bookModel.find({ publisher: query })
      res.status(200).json(booksByPublisher)
    } catch (error) {
      next(error)
    }
  }
}

export default BookController