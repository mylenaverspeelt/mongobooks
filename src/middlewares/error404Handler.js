import NotFoundError from "../errors/NotFoundError.js"
// eslint-disable-next-line no-unused-vars

export default function error404Handler(req, res, next) {
  const erro404 = new NotFoundError()
  next(erro404)
}
