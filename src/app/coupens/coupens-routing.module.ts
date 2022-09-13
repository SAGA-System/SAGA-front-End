import { CoupenListComponent } from './coupen-list/coupen-list.component';
import { CoupensComponent } from './coupens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'create',
    component: CoupensComponent
  },
  {
    path:'list',
    component: CoupenListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
