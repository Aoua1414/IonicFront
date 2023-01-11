import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacienPageRoutingModule } from './pharmacien-routing.module';

import { PharmacienPage } from './pharmacien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmacienPageRoutingModule
  ],
  declarations: [PharmacienPage]
})
export class PharmacienPageModule {}
