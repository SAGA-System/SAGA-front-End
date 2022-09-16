import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicioComponent } from './dashboard/inicio.component';
import { ProfessoresComponent } from './professores/professores.component';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
