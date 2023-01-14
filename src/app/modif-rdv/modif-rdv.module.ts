import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifRdvPageRoutingModule } from './modif-rdv-routing.module';

import { ModifRdvPage } from './modif-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifRdvPageRoutingModule
  ],
  declarations: [ModifRdvPage]
})
export class ModifRdvPageModule {}
