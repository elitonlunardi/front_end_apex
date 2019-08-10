import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pesquisa: string;
  nomes = ["Alice", "Bianca", "Cleber", "Daniel", "Roberto", "Sheila"];

  constructor() { }

  ngOnInit() {
  }

}
