import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LitaContatosComponent } from './lita-contatos/lita-contatos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FromUsuariosComponent } from './from-usuarios/from-usuarios.component';
import { FormContatosComponent } from './form-contatos/form-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LitaContatosComponent,
    ListaUsuariosComponent,
    FromUsuariosComponent,
    FormContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
