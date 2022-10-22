import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicioComponent } from './inicio/inicio.component';
import { ProfessoresComponent } from './professores/professores.component';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'inicio', component: inicioComponent},
  {
    path:'mencoes',
    loadChildren: () => import('./mencoes/mencoes.module').then(m => m.MencoesModule)
  },
  {path: 'professores', component: ProfessoresComponent},
  {
    path:'materias',
    loadChildren: () => import('./materias/materias.module').then(m => m.MateriasModule)
  },
  {path: 'suporte', component: SuporteComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
