import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Erro404Component } from './erro404/erro404.component';
import { Exercicio1Component } from './exercicio1/exercicio1.component';
import { Exercicio2Component } from './exercicio2/exercicio2.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';


const routes: Routes = [

  { path: '', redirectTo: "ex1", pathMatch: "full" },
  { path: 'ex1', component: Exercicio1Component },
  { path: 'ex2', component: Exercicio2Component },
  { path: 'ex3', component: Exercicio3Component },
  { path: '**', component: Erro404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
