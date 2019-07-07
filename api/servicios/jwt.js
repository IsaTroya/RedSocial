'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secreto = 'clave_secreta_desarrollar_RedSocial';

exports.crearToken = function(usuario){
	var payload = { //contener un objeto con los datos del usuario que quiero codficar con el token 
		sub: usuario._id,
		nombre: usuario.nombre,
		apellido: usuario.apellido,
		correo: usuario.correo,
		edad: usuario.edad,
		image: usuario.imagen,
		iat: moment().unix(), //justo el momento exacto de creacion
		exp: moment().add(30, 'days').unix


};
return jwt.encode(payload, secreto);
};