import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidePageRoutingModule } from './guide-routing.module';

import { GuidePage } from './guide.page';
import { GuideItemComponent } from './guide-item/guide-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidePageRoutingModule,
  ],
  declarations: [GuidePage, GuideItemComponent]
})
export class GuidePageModule {}
