import { MateriasComponent } from './materias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { PtdsComponent } from './ptds/ptds.component';


@NgModule({
  declarations: [
    PtdsComponent,
    MateriasComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule
  ]
})
export class MateriasModule { }
