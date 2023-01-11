import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoTraitementPageRoutingModule } from './histo-traitement-routing.module';

import { HistoTraitementPage } from './histo-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoTraitementPageRoutingModule
  ],
  declarations: [HistoTraitementPage]
})
export class HistoTraitementPageModule {}
