import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch:'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuardService] ,
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule),
    canActivate: [AuthGuardService] ,
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'rdv',
    loadChildren: () => import('./rdv/rdv.module').then( m => m.RdvPageModule),
    canActivate: [AuthGuardService] 
  },

  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'traitement',
    loadChildren: () => import('./traitement/traitement.module').then( m => m.TraitementPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'histo-traitement',
    loadChildren: () => import('./histo-traitement/histo-traitement.module').then( m => m.HistoTraitementPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'pharmacien',
    loadChildren: () => import('./pharmacien/pharmacien.module').then( m => m.PharmacienPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'modif-traitement/:id_traitement',
    loadChildren: () => import('./modif-traitement/modif-traitement.module').then( m => m.ModifTraitementPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'modif-rdv/:id_rdv',
    loadChildren: () => import('./modif-rdv/modif-rdv.module').then( m => m.ModifRdvPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'mes-histo',
    loadChildren: () => import('./mes-histo/mes-histo.module').then( m => m.MesHistoPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule),
    canActivate: [AuthGuardService] 
  },
  {
    path: 'des',
    loadChildren: () => import('./des/des.module').then( m => m.DesPageModule),
    canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
