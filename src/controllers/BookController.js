import { authorModel } from "../models/Author.js"
import bookModel from "../models/Book.js"

//classe com todos os metodos de req/res referentes a entidade book

class BookController {
    static async getBooks(req, res) {
        try {
            const booksList = await bookModel.find({})
            res.status(200).json(booksList)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao buscar lista de livros` })
        }
    }

    static async getBookById(req, res) {
        try {
            const id = req.params.id
            const book = await bookModel.findById(id)
            res.status(200).json(book)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao buscar livro específico` })
        }
    }

    static async updateBookTitle(req, res) {
        try {
            const id = req.params.id
            const title = req.body
            await bookModel.findByIdAndUpdate(id, title)
            res.status(200).send("livro atualizado com sucesso")

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar o titulo do livro` })
        }
    }


    static async addNewBook(req, res) {

        const newBook = req.body

        try {
            const authorFound = await authorModel.findById(newBook.author)
            const completeBook = {... newBook, author: {... authorFound._doc}}
            const createdBook = await bookModel.create(completeBook)
            res.status(201).json({ message: "criado com sucesso!", book: createdBook })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` })
        }
    }

    static async deleteBook(req, res) {

        try {

            const id = req.params.id
            await bookModel.findByIdAndDelete(id)
            res.status(201).send("livro excluido com sucesso!")

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar livro` })
        }
    }

}

export default BookController