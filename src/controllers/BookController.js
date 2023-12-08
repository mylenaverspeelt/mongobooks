import bookModel from "../models/Book.js"

//toda logica relacionada a ações que podem ser feitas sob um livro, req e res

class BookController {
    static async getBooks(req, res) {
        try {
            const booksList = await bookModel.find({})
            res.status(200).json(booksList)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - fslha na requisição`})
        }
    }

    static async getBookById(req, res) {
        try {
            const id = req.params.id
            const book = await bookModel.findById(id)
            res.status(200).json(book)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - fslha na requisição`})
        }
    }

    static async updateBookTitle(req, res) {
        try {
            const id = req.params.id
            const title = req.body
            await bookModel.findByIdAndUpdate(id, title)
            res.status(200).send("livro atualizado com sucesso")

        } catch (error) {
            res.status(500).json({ message: `${error.message} - fslha na requisição`})
        }
    }


    static async addNewBook(req, res) {

        try {
            const newBook = await bookModel.create(req.body)
            res.status(201).json({ message: "criado com sucesso!", book: newBook })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro!` })
        }
    }
}

export default BookController