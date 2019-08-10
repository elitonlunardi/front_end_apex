import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rota: Router, public usu : Usuario) { }

  ngOnInit() {
  }

  logar() {
    if (this.usu.usuario == 'admin' && this.usu.senha == 'admin') {
      localStorage.setItem('usuario', this.usu.usuario);
      this.usu.UsuarioAutenticado = true;
      this.rota.navigate(['/inicio'])
    } else {
      alert('usuário não encontrado!');
    }
  }


}
