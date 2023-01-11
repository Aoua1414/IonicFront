import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashHomePageRoutingModule } from './dash-home-routing.module';

import { DashHomePage } from './dash-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashHomePageRoutingModule
  ],
  declarations: [DashHomePage]
})
export class DashHomePageModule {}
