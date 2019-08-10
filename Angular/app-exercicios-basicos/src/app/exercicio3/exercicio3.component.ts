import { Component, OnInit } from '@angular/core';
import { ContatoModel } from './contatoModel';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  contatos: ContatoModel[] = [];

  nome: string;
  email: string;
  endereco: string;
  telefone: string;
  aniversario: string;

  constructor() { }

  ngOnInit() {
  }

  cadastrar(): void {
    this.contatos.push( new ContatoModel(this.nome, this.email, this.endereco,this.telefone, this.aniversario))
  }

}
