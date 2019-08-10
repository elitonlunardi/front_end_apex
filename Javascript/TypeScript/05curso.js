var vetor = [];
var Curso = /** @class */ (function () {
    function Curso(nome, valor) {
        this.nome = nome;
        this.valor = valor;
        vetor.push(this);
    }
    return Curso;
}());
window.onload = function () {
    var btnCadastrar = document.getElementById("botao");
    btnCadastrar.onclick = function () {
        var curso = document.getElementById("curso").value;
        var valor = document.getElementById("valor").value;
        var cursoObj = new Curso(curso, parseFloat(valor));
        console.log(vetor);
    };
};
