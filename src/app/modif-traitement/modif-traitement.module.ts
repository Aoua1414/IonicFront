import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifTraitementPageRoutingModule } from './modif-traitement-routing.module';

import { ModifTraitementPage } from './modif-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifTraitementPageRoutingModule
  ],
  declarations: [ModifTraitementPage]
})
export class ModifTraitementPageModule {}
