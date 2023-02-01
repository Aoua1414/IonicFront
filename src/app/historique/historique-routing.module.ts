import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriquePage } from './historique.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriquePage
  },
  {
    path: 'modif-rdv/:id_rdv',
    loadChildren: () => import('../modif-rdv/modif-rdv.module').then( m => m.ModifRdvPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriquePageRoutingModule {}
