import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAccueilPage } from './dash-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: DashAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAccueilPageRoutingModule {}
