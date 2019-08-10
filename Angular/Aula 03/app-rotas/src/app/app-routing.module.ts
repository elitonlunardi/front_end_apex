import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { HtmlComponent } from './cursos/html/html.component';
import { CssComponent } from './cursos/css/css.component';
import { JavascriptComponent } from './cursos/javascript/javascript.component';
import { SegurancaComponentesGuard } from './seguranca-componentes.guard';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, canActivate: [SegurancaComponentesGuard] },
  {
    path: 'cursos', component: CursosComponent, canActivate: [SegurancaComponentesGuard],
    children: [
      { path: 'html', component: HtmlComponent },
      { path: 'css', component: CssComponent },
      { path: 'js', component: JavascriptComponent }
    ]
  },
  { path: 'contato', component: ContatoComponent, canActivate: [SegurancaComponentesGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
