import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inicioComponent } from './inicio.component';
import { DxScrollViewModule } from 'devextreme-angular';



@NgModule({
  declarations: [inicioComponent],
  imports: [
    CommonModule,
    DxScrollViewModule
  ]
})
export class InicioModule { }
