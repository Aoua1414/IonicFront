import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesHistoPageRoutingModule } from './mes-histo-routing.module';

import { MesHistoPage } from './mes-histo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesHistoPageRoutingModule
  ],
  declarations: [MesHistoPage]
})
export class MesHistoPageModule {}
