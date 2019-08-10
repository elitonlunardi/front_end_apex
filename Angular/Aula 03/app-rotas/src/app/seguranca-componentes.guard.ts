import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, TimeoutError } from 'rxjs';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class SegurancaComponentesGuard implements CanActivate {

  constructor(private rota: Router, private usu : Usuario) {

  }

  canActivate() {
    if (localStorage.getItem('usuario') == null) {
      this.rota.navigate(['/login']);
    } else {
      this.usu.UsuarioAutenticado = true;
      return true;
    }
  }

}
