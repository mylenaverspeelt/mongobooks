import BaseError from "./BaseError.js"

export default class NotFoundError extends BaseError{
  constructor(message = "Pagina não encontrada"){
    super(message, 404)
  }
}