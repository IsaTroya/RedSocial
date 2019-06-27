'use strict' //utilizar nuevas caractersticas de java script
var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;
//conexion data base
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Red_Social', {useNewUrlParser: true})

.then(() => {
	console.log("la conexion a la base de datos RedSocial se ha realizado correctamente");
//crear servidor
app.listen(port, () => {
	console.log("servidor corriendo en http://localhost:3800");
});   
})
.catch(err => console.log(err));
/*mongoose.connect('mongodb://localhost:27017/Red_Social', function(error){
	if (error) {
		throw error;

	}else{
		console.log('conectado');
		app.listen(port, ()=>{
			console.log('puerto 3800');
		});
	}
});*/
