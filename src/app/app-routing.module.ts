import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { FromUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { LitaContatosComponent } from './lista-contatos/lista-contatos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthAdminGuard, AuthGuard } from './service/auth.guard';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'lista-contatos', component: LitaContatosComponent, canActivate: [AuthGuard]},
  {path: 'lista-usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard]},
  {path: 'cadastro-contatos', component: FormContatosComponent, canActivate: [AuthGuard]},
  {path: 'cadastro-usuario', component: FromUsuariosComponent, canActivate: [AuthAdminGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
