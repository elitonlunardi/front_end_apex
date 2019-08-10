import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  selecao: boolean = true;
  vetorUsuario: Usuario[] = [];

  constructor(private http: HttpClient) {
    this.obterUsuarios();
  }

  ngOnInit() {
  }

  obterUsuarios(): void {
    this.http.get<Usuario[]>("https://jsonplaceholder.typicode.com/users")
      .subscribe((resultado: Usuario[]) => {
        this.vetorUsuario = resultado;
        console.log(this.vetorUsuario);
      });

  }

}
