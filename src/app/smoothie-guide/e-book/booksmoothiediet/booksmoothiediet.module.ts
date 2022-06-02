import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksmoothiedietPageRoutingModule } from './booksmoothiediet-routing.module';

import { BooksmoothiedietPage } from './booksmoothiediet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksmoothiedietPageRoutingModule
  ],
  declarations: [BooksmoothiedietPage]
})
export class BooksmoothiedietPageModule {}
