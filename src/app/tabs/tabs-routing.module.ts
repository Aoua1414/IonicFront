import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'des',
        loadChildren: () => import('../des/des.module').then(m => m.DesPageModule)
      },
      {
        path: 'mes-histo',
        loadChildren: () => import('../mes-histo/mes-histo.module').then(m => m.MesHistoPageModule)
      },

      // {
      //   path: 'historique',
      //   loadChildren: () => import('../historique/historique.module').then(m => m.HistoriquePageModule)
      // },
      {
        path: 'rdv',
        loadChildren: () => import('../rdv/rdv.module').then(m => m.RdvPageModule)
      },
      {
        path: 'traitement',
        loadChildren: () => import('../traitement/traitement.module').then(m => m.TraitementPageModule)
      },
      {
        path: 'pharmacien',
        loadChildren: () => import('../pharmacien/pharmacien.module').then(m => m.PharmacienPageModule)
      },
      {
        path: 'ajout',
        loadChildren: () => import('../ajout/ajout.module').then(m => m.AjoutPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
      },
      
      {
        path: 'histo-traitement',
        loadChildren: () => import('../histo-traitement/histo-traitement.module').then(m => m.HistoTraitementPageModule)
      },
      {
        path: 'historique',
        loadChildren: () => import('../historique/historique.module').then(m => m.HistoriquePageModule)
      },
      {
        path: '',
        redirectTo: '/connexion',
        pathMatch: 'full'
      }
    ]
    
  },
  // {
  //   path: '',
  //   redirectTo: '/connexion',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
