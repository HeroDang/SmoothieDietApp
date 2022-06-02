import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookquickstartPageRoutingModule } from './bookquickstart-routing.module';

import { BookquickstartPage } from './bookquickstart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookquickstartPageRoutingModule
  ],
  declarations: [BookquickstartPage]
})
export class BookquickstartPageModule {}
