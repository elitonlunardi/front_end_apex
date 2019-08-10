export class ContatoModel {
    Nome: string;
    Email: string;
    Endereco: string;
    Telefone: string;
    Aniversario: string;

    constructor(nome: string, email: string, endereco: string, telefone: string, aniversario: string) {
        this.Nome = nome;
        this.Email = email;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.Aniversario = aniversario;
    }

}