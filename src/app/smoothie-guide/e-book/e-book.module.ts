import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EBookPageRoutingModule } from './e-book-routing.module';

import { EBookPage } from './e-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EBookPageRoutingModule
  ],
  declarations: [EBookPage]
})
export class EBookPageModule {}
