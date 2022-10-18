import { mencoesComponent } from './mencoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaltasComponent } from './faltas/faltas.component';

const routes: Routes = [
  {
    path:'boletim',
    component: mencoesComponent
  },
  {
    path:'faltas',
    component: FaltasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MencoesRoutingModule { }
