class Encapsulamento {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.mensagem();
    }

    private verificarIdade(): string {
        var situacao = "Menor de Idade";

        if (this.idade >= 18) {
            situacao = "Maior de idade";
        }

        return situacao;
    }

    private mensagem(){
        var situacao = this.verificarIdade();
        alert(`${this.nome}, tem ${this.idade} anos, sendo assim é considerado(a): ${situacao}` );
    }
}

window.onload = () => {
    var objeto = new Encapsulamento("Éliton", 20);
}