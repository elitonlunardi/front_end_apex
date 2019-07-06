var vetor = [];

class Curso {
    nome: string;
    valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
        vetor.push(this);
    }

}

window.onload = () => {
    var btnCadastrar = document.getElementById("botao");

    btnCadastrar.onclick = function () {
        var curso = (<HTMLInputElement>document.getElementById("curso")).value;
        var valor = (<HTMLInputElement>document.getElementById("valor")).value;

        var cursoObj = new Curso(curso, parseFloat(valor));
        console.log(vetor);

    }
}