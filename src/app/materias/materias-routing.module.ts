import { PtdsComponent } from './ptds/ptds.component';
import { MateriasComponent } from './materias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'grade',
    component: MateriasComponent
  },
  {
    path:'ptds',
    component: PtdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
