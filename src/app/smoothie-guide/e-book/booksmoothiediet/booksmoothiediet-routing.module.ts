import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksmoothiedietPage } from './booksmoothiediet.page';

const routes: Routes = [
  {
    path: '',
    component: BooksmoothiedietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksmoothiedietPageRoutingModule {}
