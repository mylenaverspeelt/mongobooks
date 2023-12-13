import mongoose from "mongoose"
import { authorModel } from "../models/Author.js"

//classe com todos os metodos de req/res referentes a entidade author

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authorsList = await authorModel.find({})
      res.status(200).json(authorsList)

    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao carregar lista de autores` })
    }
  }

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id
      const author = await authorModel.findById(id)

      if (author !== null) {
        res.status(200).json(author)
      } else {
        res.status(404).send("Id do Autor não localizado")
      }

    } catch (error) {
      //quando ha um caractere diferente do esperado pelo schema
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: `${error.message} - Algum dos dados fornecidos estão incorretos` })
      } else {
        res.status(500).json({ message: `${error.message} - erro interno do servidor` })
      }
    }
  }

  static async updateAuthorName(req, res) {
    try {
      const id = req.params.id
      const name = req.body
      await authorModel.findByIdAndUpdate(id, name)
      res.status(200).send("nome do autor atualizado com sucesso")

    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao atualizar o nome do autor` })
    }
  }

  static async addNewAuthor(req, res) {
    try {
      const newAuthor = await authorModel.create(req.body)
      res.status(201).json({ message: "autor criado com sucesso!", author: newAuthor })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar autor` })
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id
      await authorModel.findByIdAndDelete(id)
      res.status(201).send("autor excluido com sucesso!")

    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao deletar autor` })
    }
  }
}

export default AuthorController