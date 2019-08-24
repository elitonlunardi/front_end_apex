var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cliente = new Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number
    },
    cidade: {
        type: String
    },
    criadoEm: {
        type: Date,
        default: Date.now(),
    }
});

mongoose.model('clientes', Cliente);