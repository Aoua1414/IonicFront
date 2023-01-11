import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoTraitementPage } from './histo-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: HistoTraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoTraitementPageRoutingModule {}
