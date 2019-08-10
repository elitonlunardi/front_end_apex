import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  curso: string;
  valor: number;
  mensagemCadastro: boolean = false;
  mensagemExclusao: boolean = false;

  vetor = [];

  constructor() {
  }

  ngOnInit() {
  }

  cadastrar(): void {
    this.vetor.push({ "curso": this.curso, "valor": this.valor });
    this.curso = null;
    this.valor = null;

    this.mensagemCadastro = true;
    this.mensagemExclusao = false;
  }

  excluir(index: number): void {
    this.vetor.splice(index, 1);
    this.mensagemCadastro = false;
    this.mensagemExclusao = true;
  }
}
