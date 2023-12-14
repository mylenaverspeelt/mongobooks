import mongoose from "mongoose"
import BaseError from "../errors/BaseError.js"
import IncorrectRequisition from "../errors/IncorrectRequest.js"
import ValidationError from "../errors/ValidationError.js"

// recebe 4 parametros, intercepta todos erros que houverem na aplicação
// comentario abaixo é para o next que não é usado na função abaixo
// eslint-disable-next-line no-unused-vars
export default function errorHandler(error, req, res, next) {
  //quando ha um caractere diferente do esperado pelo schema
  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequisition().sendResponse(res)
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res)
  } else {
    new BaseError().sendResponse(res)
  }
}



