export default class BaseError extends Error{

  constructor(mesage="Erro interno do servidor", status=500){
    super()
    this.message = mesage
    this.status = status
  }

  sendResponse(res){
    res.status(this.status).json({
      message: this.message,
      status: this.status
    })
  }
}