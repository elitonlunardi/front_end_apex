class Carro {

    fabricante: string;
    modelo: string;
    cor: string;
    ano: number;

    constructor(fabricante: string, modelo: string, cor: string, ano: number) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    verificarAno() {
        if (this.ano >= 2019) {
            alert('Carro novo!');
        } else if (this.ano >= 2010) {
            alert('Precisa fazer revisão!');
        } else {
            alert("Troque o carro!");
        }
    }

    listarDados() {
        alert(`Fabricante: ${this.fabricante} \n Modelo: ${this.modelo} \n Cor: ${this.cor} \n Ano: ${this.ano}`);
    }

}

window.onload = () => {
    var obj1 = new Carro("Fiat", "Uno", "Vermelho", 2016);
    var obj2 = new Carro("Fiat", "Siena", "Preto", 2014);
    obj1.listarDados();
    obj2.verificarAno();
}