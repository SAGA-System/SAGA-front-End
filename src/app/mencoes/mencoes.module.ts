import { DxButtonModule, DxChartModule, DxScrollViewModule, DxSelectBoxModule } from 'devextreme-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MencoesRoutingModule } from './mencoes-routing.module';
import { mencoesComponent } from './mencoes.component';
import { FaltasComponent } from './faltas/faltas.component';


@NgModule({
  declarations: [mencoesComponent, FaltasComponent],
  imports: [
    CommonModule,
    MencoesRoutingModule,
    DxScrollViewModule,
    DxChartModule,
    DxSelectBoxModule,
    DxButtonModule
  ]
})
export class MencoesModule { }
