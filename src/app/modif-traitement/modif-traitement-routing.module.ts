import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifTraitementPage } from './modif-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: ModifTraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifTraitementPageRoutingModule {}
