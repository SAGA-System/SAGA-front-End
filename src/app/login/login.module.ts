import { DxButtonModule, DxSelectBoxModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxSelectBoxModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
