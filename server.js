import http from "http"

const PORT = 3000

const routs = {
    "/" : "Home Page",
    "/authors" : "Authors Page",
    "/books" : "Books Page"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end(routs[req.url])
})


server.listen(PORT, ()=>{
    console.log("Escutando servidor na porta", 3000);
})