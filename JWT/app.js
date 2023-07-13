// Importar módulo Express
const express = require('express');

// Importar módulo JWT
const jwt = require('jsonwebtoken');

// Objeto para gerenciar rotas
const app = express();

// Rotas
app.get('/', function(req, res){

    // Gerar JWT (TOKEN)
    let token = jwt.sign({'nome':'Ralf', 'idade':33}, 'proway', {expiresIn:60});

    // Retornar resposta via browser
    res.write(token)

    // Finalizar rota
    res.end();
});

app.get('/:token', function(req, res){

    // Try/Catch
    try{
        // Obter o token via URL
        let token = req.params.token;

        // Extrair informações do token;
        let extrair_token = jwt.verify(token, 'proway');

        res.write(JSON.stringify(extrair_token));
    }catch(erro){
        res.write('Falha-> '+erro);
    }

    // Finalizar rota
    res.end();

})

// Servidor
app.listen(8080);