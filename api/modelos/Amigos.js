'use strict'
var mongoose = requiere('mongoose');
var Schema = mongoose.Schema;

var AmigosSchema = Schema({
     usuario: {type: Schema.ObjectId, ref: 'Usuario'},
     amigos: {type: Schema.ObjectId, ref: 'Usuario'}
});

module.exports = mongoose.model('amigos', AmigosSchema);
