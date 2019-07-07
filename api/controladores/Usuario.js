'use strict'
var bcrypt = require('bcrypt-nodejs');

var Usuario = require('../modelos/Usuario');
var jwt = require('../servicios/jwt');

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
	
	usuario.nombre = parametros.nombre;
	usuario.apellido= parametros.apellido;
	usuario.correo = parametros.correo;
	usuario.clave = parametros.clave;
	usuario.edad = 'Edad';
	usuario.imagen =null;//
	// controlar usuarios duplicados
	Usuario.findOne({ correo: usuario.correo},(err,usuarioExistente)=>{
		
		if (usuarioExistente)
			return res.status(400).send({message: 'correo ya registrado'});
		
		if (err) {

				return res.status(500).send({message: 'Error al registrar usuaio'});
	}else{
		//if (usuario.correo == email) {
	//cifra la password y guarda los datos
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
/*}else{
	res.status(200).send({
		message: 'Error carla error'
	});*/

}
			
		});
	
} else{
	res.status(200).send({
		message: 'Rellena todos los campos necesarios'
	});
}
	}

	function iniciarSesion(req, res){
		var parametros =req.body;
		var correo = parametros.correo;
		var clave = parametros.clave;

		
		Usuario.findOne({correo: correo}, (err, usuario) =>{
			

			if (err) return res.status(200).send({message: 'Error en la peticion'});
			if (usuario) {
				bcrypt.compare(clave, usuario.clave, (err, check) =>{
					if (check){
						if (parametros.gettoken) {
							//generar y devover token
							
							return res.status(200).send({
								token: jwt.crearToken(usuario)
							});

						}else{


						//devolver datos de los usuarios
						
						usuario.clave = undefined; //no mostrar contraseña
					    return res.status(200).send({usuario});
					}


						
					}else{
						return res.status(404).send({message: 'El Usuario no se ha podido encontrar '});
					}
				});
				
			}else{
				return res.status(404).send({message: 'El Usuario es incorrecto '});

			}
		});
	}



	module.exports = {
		home,
		pruebas,
		guardarUsuario,
		iniciarSesion

	}