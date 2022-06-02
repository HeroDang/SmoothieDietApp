import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dayof21daysPageRoutingModule } from './dayof21days-routing.module';

import { Dayof21daysPage } from './dayof21days.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dayof21daysPageRoutingModule
  ],
  declarations: [Dayof21daysPage]
})
export class Dayof21daysPageModule {}
