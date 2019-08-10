import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login/usuario';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {


  public menu : boolean = true;

  constructor(private rota: Router, public usu : Usuario) { }

  ngOnInit() {
    
  }

  sair() {
    localStorage.removeItem('usuario');
    this.usu.UsuarioAutenticado = false;
    this.rota.navigate(['/login']);
  }

}
