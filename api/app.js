'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//cargar rutas
var usuario_rutas = require('./rutas/Usuario');
////cargar middlewares metodo qu ese ejecuta antes de que llege a un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//cors

//rutas (reescribir rutas finales)
app.use('/api', usuario_rutas);
/*app.get('/', (req, res) => {
	res.status(200).send('API funciona');
	
}*/
//exportar

module.exports = app;

