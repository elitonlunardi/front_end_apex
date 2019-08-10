import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatoComponent } from './contato/contato.component';
import { TopoComponent } from './topo/topo.component';
import { ModalComponent } from './clientes/modal/modal.component';



// @NgModule({
//   imports: [CarouselModule.forRoot(),...]
// })


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClientesComponent,
    ContatoComponent,
    TopoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
