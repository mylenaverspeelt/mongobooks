import bookModel from "../models/Book"

//toda logica relacionada a ações que podem ser feitas sob um livro, req e res

class BookController {
    static async getBooks(req, res) {
        const booksList = await bookModel.find({})
        res.status(200).json(booksList)
    }
}

export default BookController