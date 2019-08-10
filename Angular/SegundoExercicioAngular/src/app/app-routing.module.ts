import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LembretesComponent } from './lembretes/lembretes.component';
import { ContatosComponent } from './contatos/contatos.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicial', pathMatch: 'full' },
  { path: 'inicial', component: InicioComponent },
  { path: 'lembretes', component: LembretesComponent },
  { path: 'contatos', component: ContatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
