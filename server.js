// Importa o módulo express
const express = require('express');

// Cria uma instância do aplicativo express
const app = express();

// importando as rotas

const rota_imagem = require("./rotas/img")

// Define uma rota básica
app.use("/imagem" , rota_imagem )

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Node.js!');
});

// Define a porta em que o servidor irá ouvir

app.listen(3000,() => {
    console.log("Servidor aberto")
})