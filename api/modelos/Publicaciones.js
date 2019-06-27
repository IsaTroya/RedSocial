'use static'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PublicacionesSchema = Schema({
   descripcion: String,
   fecha_creacion: String,
   comentarios: String,
   file: String,
   usuario:{type: Schema.ObjectId, ref: 'Usuario'} 

});
 module.exports = mongoose.model('publicaciones', PublicacionesSchema);