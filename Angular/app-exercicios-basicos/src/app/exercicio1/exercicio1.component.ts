import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  valor: number;
  calculo: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  calcular(): void {
    this.calculo = [];
    var valor = this.valor;
    for (let index = 0; index < 11; index++) {
      this.calculo.push({ "calculo": `${this.valor} x ${index} é = ${this.valor * index} \n` });
    }
  }

}
