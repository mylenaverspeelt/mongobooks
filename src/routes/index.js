import booksRoutes from "./BooksRoutes.js"
import authorsRoutes from "./AuthorsRoutes.js"


const routes = (app) => {
  app.use(booksRoutes, authorsRoutes)
}

export default routes


//ponto inicial pra todas as rotas usadas pela aplicação