import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { Usuario } from './login/usuario';
import { HtmlComponent } from './cursos/html/html.component';
import { CssComponent } from './cursos/css/css.component';
import { JavascriptComponent } from './cursos/javascript/javascript.component';
import { FiltroPipe } from './inicio/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    InicioComponent,
    ContatoComponent,
    LoginComponent,
    CursosComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Usuario],
  bootstrap: [AppComponent]
})
export class AppModule { }
