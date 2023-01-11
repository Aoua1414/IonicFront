import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
      },

      {
        path: 'historique',
        loadChildren: () => import('../historique/historique.module').then(m => m.HistoriquePageModule)
      },
      {
        path: 'rdv',
        loadChildren: () => import('../rdv/rdv.module').then(m => m.RdvPageModule)
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
        path: 'inscription',
        loadChildren: () => import('../inscription/inscription.module').then(m => m.InscriptionPageModule)
      },
      {
        path: '',
        redirectTo: '/connexion',
        pathMatch: 'full'
      }
    ]
    
  },
  {
    path: '',
    redirectTo: '/connexion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
