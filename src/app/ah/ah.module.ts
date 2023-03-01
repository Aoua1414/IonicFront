import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhPageRoutingModule } from './ah-routing.module';

import { AhPage } from './ah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhPageRoutingModule
  ],
  declarations: [AhPage]
})
export class AhPageModule {}
