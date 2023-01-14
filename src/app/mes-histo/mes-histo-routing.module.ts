import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesHistoPage } from './mes-histo.page';

const routes: Routes = [
  {
    path: '',
    component: MesHistoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesHistoPageRoutingModule {}
