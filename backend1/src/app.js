const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate')
const routes = require('./routes');
const app = express();
app.use(cors(/*{
    origin:'http://meuapp.com'
}*/));
app.use(express.json());
app.use(routes);
app.use(errors())
module.exports = app;


// metodos HTTP:
// GET: Buscar/listar uma informaçao do backend
// POST: Criar uma informação no backend
// PUT: Alterar uma informaçao no backend
// DELETE: Deletar uma informação mo backend

// Tipos de parametros: 
// Query Params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
// Route Params: parametros ultilizados para identificar recursos
// request body: Corpo da requisitação , ultilizado para criar ou alterar recursos

