import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookdetoxPageRoutingModule } from './bookdetox-routing.module';

import { BookdetoxPage } from './bookdetox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookdetoxPageRoutingModule
  ],
  declarations: [BookdetoxPage]
})
export class BookdetoxPageModule {}
