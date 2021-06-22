import express from "express";

const app = express();

/*
* GET    => Buscar uma informação
* POST   => Inserir (criar) uma informação
* PUT    => Alterar uma informação
* DELETE => Remover um dado
* PATCH  => Alterar uma informação específica
*/

app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá Diego")
});

app.post("/test-post", (request, response) => {
    return response.send("Olá Diego método POST.")
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));