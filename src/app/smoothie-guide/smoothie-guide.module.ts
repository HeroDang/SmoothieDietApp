import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmoothieGuidePageRoutingModule } from './smoothie-guide-routing.module';

import { SmoothieGuidePage } from './smoothie-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmoothieGuidePageRoutingModule
  ],
  declarations: [SmoothieGuidePage]
})
export class SmoothieGuidePageModule {}
