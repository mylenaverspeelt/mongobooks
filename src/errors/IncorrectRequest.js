import BaseError from "./BaseError.js"

export default class IncorrectRequisition extends BaseError{
  constructor(message = "Um ou mais dados fornecidos estão incorretos"){
    super( message, 400)
  }
}