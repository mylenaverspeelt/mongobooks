import IncorrectRequisition from "./IncorrectRequest.js"

export default class ValidationError extends IncorrectRequisition{
  constructor(error){

    let errorMessage = Object.values(error.errors).map(error => error.message).join(" / ")
    super(`Os seguintes erros foram encontrados: ${errorMessage}`)
  }
}