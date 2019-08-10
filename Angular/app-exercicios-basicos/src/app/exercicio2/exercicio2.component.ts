import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  estado: number = 0;
  cidade: number = 0;

  alert: string;

  constructor() { }

  ngOnInit() {
  }

  mostrarDescricao(): void {
    if (this.cidade == 5) {
      this.alert = 'Joinville'
    } else if (this.cidade == 6) {
      this.alert = 'São Joaquim'
    }
    else if (this.cidade == 7) {
      this.alert = 'Florianópolis'
    }
    else if (this.cidade == 9) {
      this.alert = 'Planaltina'
    }
    else if (this.cidade == 10) {
      this.alert = 'Samambaia'
    }
    else if (this.cidade == 11) {
      this.alert = 'Lagoa azul'
    }
    else if (this.cidade == 13) {
      this.alert = 'Angra dos reis'
    }
    else if (this.cidade == 14) {
      this.alert = 'Rio de Janeiro'
    }
    else if (this.cidade == 15) {
      this.alert = 'Búzios'
    }

  }

}
