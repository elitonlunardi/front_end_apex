import { Component, OnInit } from '@angular/core';
import { Lembrete } from './models/lembretes';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.component.html',
  styleUrls: ['./lembretes.component.css']
})
export class LembretesComponent implements OnInit {

  lembretes: Lembrete[] = [];
  lembrete: Lembrete = new Lembrete();

  constructor() { }

  ngOnInit() {
  }

  cadastrar() {
    this.lembretes.push(this.lembrete);
    this.lembrete = new Lembrete();
  }

}
