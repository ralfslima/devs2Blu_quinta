// Importar o módulo Express
const express = require('express');

// Importar o módulo CORS
var cors = require('cors');

// Criar um objeto para gerar rotas
const app = express();

// Habilitar o CORS
app.use(cors());

// Rota
app.get('/', function(req, res){
    res.status(200).json({'nome':'Ralf'});
    res.end();
});

// Servidor
app.listen(8080);