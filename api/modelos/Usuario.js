'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsuarioSchema = Schema({
    nombre: String,
    apellido: String, 
    sexo: String,
    pais: String,
    edad: String,
    correo: String,
    clave: String,

});

module.exports = mongoose.model('usuario', UsuarioSchema);
