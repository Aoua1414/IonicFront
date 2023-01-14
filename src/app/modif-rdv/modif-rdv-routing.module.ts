import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifRdvPage } from './modif-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: ModifRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifRdvPageRoutingModule {}
