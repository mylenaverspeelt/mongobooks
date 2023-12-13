import { authorModel } from "../models/Author.js"

//classe com todos os metodos de req/res referentes a entidade author

class AuthorController {
  static async getAuthors(req, res, next) {
    try {
      const authorsList = await authorModel.find({})
      res.status(200).json(authorsList)
    } catch (error) {
      next(error)
    }
  }

  static async getAuthorById(req, res, next) {
    try {
      const id = req.params.id
      const author = await authorModel.findById(id)

      if (author !== null) {
        res.status(200).json(author)
      } else {
        res.status(404).send("Id do Autor não localizado")
      }
    } catch (error) {
      //metodo que manda pro middleware o erro encontrado
      next(error)
    }
  }

  static async updateAuthorName(req, res, next) {
    try {
      const id = req.params.id
      const name = req.body
      await authorModel.findByIdAndUpdate(id, name)
      res.status(200).send("nome do autor atualizado com sucesso")
    } catch (error) {
      next(error)
    }
  }

  static async addNewAuthor(req, res, next) {
    try {
      const newAuthor = await authorModel.create(req.body)
      res.status(201).json({ message: "autor criado com sucesso!", author: newAuthor })
    } catch (error) {
      next(error)
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const id = req.params.id
      await authorModel.findByIdAndDelete(id)
      res.status(201).send("autor excluido com sucesso!")
    } catch (error) {
      next(error)
    }
  }
}

export default AuthorController