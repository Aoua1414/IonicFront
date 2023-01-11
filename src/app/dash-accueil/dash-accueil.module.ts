import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAccueilPageRoutingModule } from './dash-accueil-routing.module';

import { DashAccueilPage } from './dash-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAccueilPageRoutingModule
  ],
  declarations: [DashAccueilPage]
})
export class DashAccueilPageModule {}
