import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdressePageRoutingModule } from './adresse-routing.module';

import { AdressePage } from './adresse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdressePageRoutingModule
  ],
  declarations: [AdressePage]
})
export class AdressePageModule {}
