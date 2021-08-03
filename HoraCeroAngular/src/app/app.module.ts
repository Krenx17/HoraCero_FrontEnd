import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { Navbar1Component } from './componentes/navbar1/navbar1.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewnewsComponent } from './componentes/newnews/newnews.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    NoticiaComponent,
    NoticiasComponent,
    UsuariosComponent,
    PerfilComponent,
    Navbar1Component,
    NewnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
