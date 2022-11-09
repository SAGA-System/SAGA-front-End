import { SuporteComponent } from './suporte.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [SuporteComponent],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule
  ]
})
export class SuporteModule { }
