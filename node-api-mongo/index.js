const express = require("express");
// Cria uma aplicação Express
const app = express();
//Define uma rota
app.get("/courses", (req, res) => {
    return res.send("Cursos do IFRS");
});
// Inicia o servidor na porta '3000'
app.listen(3000, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3000");
});
