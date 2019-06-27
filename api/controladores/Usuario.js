'use strict'
var bcrypt = require('bcrypt-nodejs');

var Usuario = require('../modelos/Usuario');

function home(req, res){
	console.log(req.body);
	res.status(200).send({
		message: 'API funciona'
		});
		//console.log("APis");
	
	}

function pruebas(req, res){
	console.log(req.body);
	res.status(200).send({
		message: 'Acción de pruebas en el servidor de NodeJS'
	});
	}
function guardarUsuario(req, res){
		var parametros = req.body;//todos los campos que nos lleguen por post los vamos a recoger y guardar en esta variable
		var usuario = new Usuario(); //objet del modelo usuario 
	
if (parametros.nombre && parametros.apellido && 
	parametros.correo && parametros.clave) {
	 //si todo es true, se va a setear los datos
		res.status(200).send({
		message: 'entra aqui'
	});
	usuario.nombre = parametros.nombre;
	usuario.apellido= parametros.apellido;
	usuario.correo = parametros.correo;
	usuario.clave = parametros.clave;
	usuario.edad = 'Edad';
	usuario.imagen =null;// 

    bcrypt.hash(parametros.clave, null, null, (err, hash) => {
    	usuario.clave = hash;
    	usuario.save((err, usuarioStored) => {
    		if(err) return res.status(500).send({message: 'error al guardar el usuario'});

    		if (usuarioStored) {
    			res.status(200).send({usuario: usuarioStored});
    		}else{
    			res.status(404).send({message:'no se ha registrdo el usuario'});
    		}

    	});
    });

} else{
	res.status(200).send({
		message: 'Rellena todos los campos necesarios'
	});
}
	}



	module.exports = {
		home,
		pruebas,
		guardarUsuario

	}