const CursoModel = require('../models/Curso');

module.exports = {
    async cadastrar(req, res) {
        console.log(req.headers);
        console.log(req.body);
        //const { codigo, curso, valor } = req.body;
        // const cursoPost = await CursoModel.create({
        //     codigo,
        //     curso,
        //     valor,
        // })
        return res.json(req.body);
    },

    async selecionar(req,res){
        return res.json("Ok");
    }

}