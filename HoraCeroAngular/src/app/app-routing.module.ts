
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NewnewsComponent } from './componentes/newnews/newnews.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegisterComponent } from './componentes/register/register.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'users', component: UsuariosComponent},
  { path: 'profile', component: PerfilComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'noticia', component: NoticiaComponent},
  { path: 'crearnoticia', component: NewnewsComponent},
  { path: '**', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }