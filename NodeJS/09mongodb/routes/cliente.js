var express = require('express');
var mongoose = require('mongoose');

require('../models/Cliente')
var Cliente = mongoose.model('clientes')

var rotas = express.Router();

rotas.get('/', function (req, res) {
    res.render('cliente/index');
})

rotas.get('/cadastrar', function (req, res) {
    res.render('cliente/cadastrar')
})

rotas.post('/cadastrar', function (req, res) {
    if (!req.body.nome || !req.body.idade || !req.body.cidade) {
        req.flash('mensagem_falha', 'Favor preencher todos os campos');
    }
    else {

        var cliente = {
            nome: req.body.nome,
            idade: req.body.idade,
            cidade: req.body.cidade
        }
        // new Cliente(cliente).save(); 
        new Cliente(cliente).save().then(() => {
            req.flash('mensagem_ok', "Cliente cadastrado com sucesso");
            res.redirect('/cliente/cadastrar');
        })
            .catch(() => {
                req.flash('mensagem_falha', 'Falha ao cadastrar cliente');
                res.redirect('/cliente/cadastrar');
            })


    }
})

rotas.get('/listar', function (req, res) {
    Cliente.find().then((registros) => {
        res.render('cliente/listar', { registros: registros });
    })
        .catch(() => {
            req.flash('mensagem_falha', 'Falha ao obter registros')
            res.redirect('/cliente');
        })
})

rotas.get('/excluir/:id', function (req, res) {
    Cliente.remove({ _id: req.params.id }).then(() => {
        req.flash('mensagem_ok', 'Cliente removido com sucesso')
        res.redirect('/cliente/listar');
    }).catch((erro) => {
        req.flash('mensagem_falha', 'Falha ao remover cliente ' + erro)
        res.redirect('/cliente/listar');
    })
})

rotas.get('/alterar/:id', function (req, res) {
    Cliente.findById(req.params.id)
        .then((cliente) => {
            res.render('cliente/editar', { resultado: cliente });
        })
        .catch((erro) => {
            req.flash('mensagem_falha', "Não foi possível localizar o cliente");
        })
})

rotas.post('/editar', function (req, res) {

    Cliente.findById(req.body.id).then((cliente) => {
        cliente.nome = req.body.nome;
        cliente.idade = req.body.idade;
        cliente.cidade = req.body.cidade;
        cliente.save();

        req.flash('mensagem_ok', 'Cliente alterado com sucesso');
        res.redirect('/cliente/listar');
    })
        .catch((error) => {
            req.flash('mensagem_falha', 'Falha ao alterar cliente');
            res.redirect('/cliente/listar');
        })
})

module.exports = rotas;