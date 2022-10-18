import { MateriasComponent } from './materias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { PtdsComponent } from './ptds/ptds.component';
import { DxSelectBoxModule, DxButtonModule, DxTextBoxModule, DxScrollViewModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    PtdsComponent,
    MateriasComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxTextBoxModule,
    DxScrollViewModule
  ]
})
export class MateriasModule { }
