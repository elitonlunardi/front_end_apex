var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Produto = new Schema({
    nome: {
        type: String,
        required: true
    },
    segmento: {
        type: String
    },
    valor: {
        type: Number
    }
}, {
        timestamps: true,
    }
);

mongoose.model('produtos', Produto);