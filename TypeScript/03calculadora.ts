class Calculadora {
    numero1: number;
    numero2: number;


    somar() {
        alert(`A soma é ${this.numero1 + this.numero2}`);
    }
    subtrair() {
        alert(`A subtração é ${this.numero1 - this.numero2}`);
    }

    multiplicar() {
        alert(`A multiplicacao é ${this.numero1 * this.numero2}`);
    }

    dividir() {
        alert(`A divisão é é ${this.numero1 / this.numero2}`);
    }

    escolherOperacao(operacao: number) {
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
    }
}
window.onload = () => {

    var botao = document.getElementById("calcular");


    botao.onclick = function () {

        var campo1 = parseFloat((<HTMLInputElement>document.getElementById("campo1")).value);
        var campo2 = parseFloat((<HTMLInputElement>document.getElementById("campo2")).value);
        var operacao = parseInt((<HTMLInputElement>document.getElementById("operacao")).value);

        var objeto = new Calculadora();
        objeto.numero1 = campo1;
        objeto.numero2 = campo2;
        objeto.escolherOperacao(operacao);

    };
}