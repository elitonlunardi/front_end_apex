var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function () {
        alert("A soma \u00E9 " + (this.numero1 + this.numero2));
    };
    Calculadora.prototype.subtrair = function () {
        alert("A subtra\u00E7\u00E3o \u00E9 " + (this.numero1 - this.numero2));
    };
    Calculadora.prototype.multiplicar = function () {
        alert("A multiplicacao \u00E9 " + this.numero1 * this.numero2);
    };
    Calculadora.prototype.dividir = function () {
        alert("A divis\u00E3o \u00E9 \u00E9 " + this.numero1 / this.numero2);
    };
    Calculadora.prototype.escolherOperacao = function (operacao) {
        switch (operacao) {
            case 1:
                this.somar();
                break;
            case 2:
                this.subtrair();
                break;
            case 3:
                this.multiplicar();
                break;
            case 4:
                this.dividir();
                break;
        }
    };
    return Calculadora;
}());
window.onload = function () {
    var botao = document.getElementById("calcular");
    botao.onclick = function () {
        var campo1 = parseFloat(document.getElementById("campo1").value);
        var campo2 = parseFloat(document.getElementById("campo2").value);
        var operacao = parseInt(document.getElementById("operacao").value);
        var objeto = new Calculadora();
        objeto.numero1 = campo1;
        objeto.numero2 = campo2;
        objeto.escolherOperacao(operacao);
    };
};
