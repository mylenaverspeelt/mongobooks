# mongobooks
API Rest de uma livraria fictícia.

### Tecnologias Utilizadas:
- Express
- Mongoose
- Nodemon
- Dotenv
- Thunder Client
- MongoDB
- NodeJS

### Recursos e Funcionalidades:
- É possível listar todos os autores, cadastrar um novo autor, procurar autor por ID, atualizar o nome do autor e deletar o autor
- Também é possivel listar todos os livros, listar todos os livros por Editora, listar livro por ID, adicionar novo livro, atualizar o titulo do livro e deletar um livro.

### Repositórios Originais:
O projeto foi realizado durante os cursos abaixo e os repositórios originais podem ser consultados através dos links:
- [Node.js: criando uma API Rest com Express e MongoDB](https://github.com/alura-cursos/3266-express-mongo/tree/aula-1)
- [Node.js: lidando com buscas, filtros, paginação e erros em uma API](https://github.com/antonio-evaldo/api-node-express-2)

### Melhorias:
Além do que foi proposto nos cursos, realizei algumas melhorias como:
- Renomeei métodos, classes e atributos que julguei estarem com legibilidade baixa/dubia
- Codei o projeto em um unico idioma (ingles) mostrando apenas em portugues as mensagens exibidas ao usuário

### Executando a aplicação:
Pré-requisitos:
- certifique-se de ter o Node instalado na sua máquina 
- configurar um banco de dados MongoDB e ter em mãos a string de conexão
- você pode utilizar a IDE e interface para testar as requisições de sua preferência, porem recomendo utilizar o VSCode pois com a extensão Thunder Client é possível testar as rotas de forma descomplicada e rápida.

Executar o projeto:
- clone o repositório
- baixe as dependencias do projeto com: 
```
npm i 
```
- adicionar a string de conexão com a base de dados no arquivo .env (verificar o arquivo example.env),
- rode a aplicação com o comando:
```
npm run dev
```
- O servidor estará escutando na porta 3000
- Verifique quais as rotas disponiveis na pasta src/routes, abra o thunder client para realizar os testes.

### Contribuindo com o projeto:
- Crie um fork do repositório
- Crie uma branch para suas alterações 
- Faça commit das alterações 
- Faça push para a branch
- Abra um novo Pull Request explicando na descrição quais foram as suas contribuições


Desenvolvido por [Mylena Verspeelt](https://www.linkedin.com/in/mylenaverspeelt/) 🌿🌿   

