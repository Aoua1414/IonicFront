import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesPageRoutingModule } from './des-routing.module';

import { DesPage } from './des.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesPageRoutingModule
  ],
  declarations: [DesPage]
})
export class DesPageModule {}
