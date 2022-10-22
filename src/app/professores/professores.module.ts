import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresComponent } from './professores.component';
import { DxButtonModule, DxPopupModule, DxScrollViewModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { ProfessoresDetailComponent } from './professores-detail/professores-detail.component';



@NgModule({
  declarations: [ProfessoresComponent, ProfessoresDetailComponent],
  imports: [
    CommonModule,
    DxScrollViewModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxTextBoxModule,
    DxPopupModule
  ]
})
export class ProfessoresModule { }
