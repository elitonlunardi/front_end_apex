var produtos = [];
var Produto = /** @class */ (function () {
    function Produto(nome, valor, marca) {
        this.nome = nome;
        this.valor = valor;
        this.marca = marca;
        produtos.push(this);
    }
    return Produto;
}());
window.onload = function () {
    preencherTabela();
    var botaoCadastrarProduto = document.getElementById("cadastrarProduto");
    botaoCadastrarProduto.onclick = function () {
        cadastrarProduto();
    };
    function cadastrarProduto() {
        var nomeProduto = document.getElementById("nomeProduto");
        var valorProduto = document.getElementById("valorProduto");
        var marcaProduto = document.getElementById("marcaProduto");
        if (nomeProduto.value == "") {
            nomeProduto.focus();
            alert("Preencha o valor do nome do produto");
            return false;
        }
        if (valorProduto.value == "") {
            valorProduto.focus();
            alert("Preencha o valor do valor do produto");
            return false;
        }
        if (marcaProduto.value == "") {
            marcaProduto.focus();
            alert("Preencha o valor marca do produto");
            return false;
        }
        var prod = new Produto(nomeProduto.value, parseFloat(valorProduto.value), marcaProduto.value);
        console.log(produtos);
        preencherTabela();
    }
    function preencherTabela() {
        var tabela = document.getElementsByClassName("tableProdutos")[0];
        document.getElementsByClassName("tableProdutos")[0].innerHTML = "";
        tabela.innerHTML = "<thead><tr><th>Nome produto</th><th>Valor do produto</th><th>Marca do produto</th></tr></thead>";
        for (var i = 0; i < produtos.length; i++) {
            var linha = tabela.insertRow(-1);
            var coluna1 = linha.insertCell(0);
            var coluna2 = linha.insertCell(0);
            var coluna3 = linha.insertCell(0);
            coluna1.innerHTML = produtos[i]["nome"];
            coluna2.innerHTML = produtos[i]["valor"];
            coluna3.innerHTML = produtos[i]["marca"];
        }
    }
};
