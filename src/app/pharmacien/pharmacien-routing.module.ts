import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacienPage } from './pharmacien.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacienPageRoutingModule {}
