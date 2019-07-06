var Encapsulamento = /** @class */ (function () {
    function Encapsulamento(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.mensagem();
    }
    Encapsulamento.prototype.verificarIdade = function () {
        var situacao = "Menor de Idade";
        if (this.idade >= 18) {
            situacao = "Maior de idade";
        }
        return situacao;
    };
    Encapsulamento.prototype.mensagem = function () {
        var situacao = this.verificarIdade();
        alert(this.nome + ", tem " + this.idade + " anos, sendo assim \u00E9 considerado(a): " + situacao);
    };
    return Encapsulamento;
}());
window.onload = function () {
    var objeto = new Encapsulamento("Éliton", 20);
};
