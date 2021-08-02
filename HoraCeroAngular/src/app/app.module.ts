import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    NoticiaComponent,
    NoticiasComponent,
    UsuariosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
