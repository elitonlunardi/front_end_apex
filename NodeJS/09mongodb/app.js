var express = require('express');
var handlebars = require('express-handlebars');
var bodyparser = require('body-parser');
var path = require('path');
var sessao = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');


var rotaCliente = require('./routes/cliente');
var rotaProduto = require('./routes/produto');

var app = express();

app.use(sessao({
    secret: 'geral',
    resave: true,
    saveUninitialized: true
}))

app.use(flash())

app.use(function (req, res, next) {
    res.locals.mensagem_ok = req.flash('mensagem_ok')
    res.locals.mensagem_falha = req.flash('mensagem_falha')
    next();
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb://localhost/projeto')
    .then(() => {
        console.log('Base de dados criada');
    })
    .catch((errors) => {
        console.log('erro ao criar a base' + errors);
    })

app.get('/', function (req, res) {
    res.send('ola');
})

app.use('/cliente', rotaCliente);
app.use('/produto', rotaProduto);

app.listen(3333, function () {
    console.log('server ok');
});

