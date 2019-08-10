const mongoose = require('mongoose');


const CursoSchema = new mongoose.Schema({
    codigo : String,
    curso : String,
    valor : {
        type:Number,
        default : 0,
    }
},{
    timestamps : true,
})

module.exports = mongoose.model('Curso', CursoSchema);