import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesPage } from './des.page';

const routes: Routes = [
  {
    path: '',
    component: DesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesPageRoutingModule {}
