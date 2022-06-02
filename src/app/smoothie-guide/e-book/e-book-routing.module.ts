import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EBookPage } from './e-book.page';

const routes: Routes = [
  {
    path: '',
    component: EBookPage
  },
  {
    path: 'bookdetox',
    loadChildren: () => import('./bookdetox/bookdetox.module').then( m => m.BookdetoxPageModule)
  },
  {
    path: 'bookquickstart',
    loadChildren: () => import('./bookquickstart/bookquickstart.module').then( m => m.BookquickstartPageModule)
  },
  {
    path: 'booksmoothiediet',
    loadChildren: () => import('./booksmoothiediet/booksmoothiediet.module').then( m => m.BooksmoothiedietPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EBookPageRoutingModule {}
