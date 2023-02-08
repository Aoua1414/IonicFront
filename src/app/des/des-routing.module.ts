import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesPage } from './des.page';

const routes: Routes = [
  {
    path: '',
    component: DesPage
  },
  {
    path: 'ajout',
    loadChildren: () => import('../ajout/ajout.module').then( m => m.AjoutPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesPageRoutingModule {}
