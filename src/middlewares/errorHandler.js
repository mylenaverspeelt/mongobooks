import mongoose from "mongoose"

// recebe 4 parametros, intercepta todos erros que houverem na aplicação
// comentario abaixo é para o next que não é usado na função abaixo
// eslint-disable-next-line no-unused-vars
export default function errorHandler(error, req, res, next){
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: `${error.message} - Algum dos dados fornecidos estão incorretos` })
  } else {
    res.status(500).json({ message: `${error.message} - Erro interno do servidor` })
  }
}
 
 
 
