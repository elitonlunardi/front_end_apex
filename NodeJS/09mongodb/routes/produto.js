var express = require('express');
var mongoose = require('mongoose');

require('../models/Produto')
var ProdutoModel = mongoose.model('produtos')

var rotas = express.Router();

rotas.get('/', function (req, res) {
    res.render('produto/index');
});

rotas.get('/cadastrar', function (req, res) {
    res.render('produto/cadastrar')
})

rotas.post('/cadastrar', function (req, res) {
    if (!req.body.nome || !req.body.segmento || !req.body.valor) {
        req.flash('mensagem_falha', 'Favor preencher todos os campos');
    }
    else {

        var produto = {
            nome: req.body.nome,
            segmento: req.body.segmento,
            valor: req.body.valor
        }
        new ProdutoModel(produto).save().then(() => {
            req.flash('mensagem_ok', "Produto cadastrado com sucesso");
            res.redirect('/produto/cadastrar');
        })
            .catch(() => {
                req.flash('mensagem_falha', 'Falha ao cadastrar produto');
                res.redirect('/produto/cadastrar');
            })


    }
})

rotas.get('/listar', function (req, res) {
    ProdutoModel.find().then((registros) => {
        res.render('produto/listar', { registros: registros });
    })
        .catch(() => {
            req.flash('mensagem_falha', 'Falha ao obter registros')
            res.redirect('/produto');
        })
})

rotas.get('/excluir/:id', function (req, res) {
    ProdutoModel.remove({ _id: req.params.id }).then(() => {
        req.flash('mensagem_ok', 'Produto removido com sucesso')
        res.redirect('/produto/listar');
    }).catch((erro) => {
        req.flash('mensagem_falha', 'Falha ao remover produto ' + erro)
        res.redirect('/produto/listar');
    })
})


rotas.get('/alterar/:id', function (req, res) {
    ProdutoModel.findById(req.params.id)
        .then((produto) => {
            res.render('produto/editar', { resultado: produto });
        })
        .catch((erro) => {
            req.flash('mensagem_falha', "Não foi possível localizar o produto");
        })
})


rotas.post('/editar', function (req, res) {

    ProdutoModel.findById(req.body.id).then((produto) => {
        produto.nome = req.body.nome;
        produto.segmento = req.body.segmento;
        produto.valor = req.body.valor;
        produto.save();

        req.flash('mensagem_ok', 'Produto alterado com sucesso');
        res.redirect('/produto/listar');
    })
        .catch((error) => {
            req.flash('mensagem_falha', 'Falha ao alterar produto');
            res.redirect('/produto/listar');
        })
})


module.exports = rotas;