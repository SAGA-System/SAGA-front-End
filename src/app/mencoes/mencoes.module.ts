import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './mencoes-routing.module';
import { mencoesComponent } from './mencoes.component';
import { FaltasComponent } from './faltas/faltas.component';


@NgModule({
  declarations: [mencoesComponent, FaltasComponent],
  imports: [
    CommonModule,
    CoupensRoutingModule
  ]
})
export class MencoesModule { }
