import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch:'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'rdv',
    loadChildren: () => import('./rdv/rdv.module').then( m => m.RdvPageModule)
  },

  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'traitement',
    loadChildren: () => import('./traitement/traitement.module').then( m => m.TraitementPageModule)
  },
  {
    path: 'histo-traitement',
    loadChildren: () => import('./histo-traitement/histo-traitement.module').then( m => m.HistoTraitementPageModule)
  },
  {
    path: 'pharmacien',
    loadChildren: () => import('./pharmacien/pharmacien.module').then( m => m.PharmacienPageModule)
  },
  {
    path: 'modif-traitement',
    loadChildren: () => import('./modif-traitement/modif-traitement.module').then( m => m.ModifTraitementPageModule)
  },
  {
    path: 'modif-rdv',
    loadChildren: () => import('./modif-rdv/modif-rdv.module').then( m => m.ModifRdvPageModule)
  },
  {
    path: 'mes-histo',
    loadChildren: () => import('./mes-histo/mes-histo.module').then( m => m.MesHistoPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'des',
    loadChildren: () => import('./des/des.module').then( m => m.DesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
