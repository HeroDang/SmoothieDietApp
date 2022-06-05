import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmoothieGuidePage } from './smoothie-guide.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SmoothieGuidePage,
    children: [
      {
        path: 'e-book',
        children: [
          {
            path: '',
            loadChildren: () => import('./e-book/e-book.module').then( m => m.EBookPageModule)
          },
          {
            path: 'bookdetox',
            loadChildren: () => import('./e-book/bookdetox/bookdetox.module').then( m => m.BookdetoxPageModule)
          },
          {
            path: 'bookquickstart',
            loadChildren: () => import('./e-book/bookquickstart/bookquickstart.module').then( m => m.BookquickstartPageModule)
          },
          {
            path: 'booksmoothiediet',
            loadChildren: () => import('./e-book/booksmoothiediet/booksmoothiediet.module').then( m => m.BooksmoothiedietPageModule)
          }
        ],
      },
      {
        path: 'guide',
        children: [
          {
            path: '',
            loadChildren: () => import('./guide/guide.module').then( m => m.GuidePageModule)
          },
          {
            path: 'shppinglist/:bookId/:listId',
            loadChildren: () => import('./guide/shopping-list/shopping-list.module').then((m) => m.ShoppingListPageModule),
          },
          {
            path: 'daydetail/:bookId/:dayId/:smoothieId',
            loadChildren: () => import('./guide/day-detail/day-detail.module').then((m) => m.DayDetailPageModule),
          },
          {
            path: ':bookId/:dayof21Id',
            loadChildren: () => import('./guide/dayof21days/dayof21days.module').then((m) => m.Dayof21daysPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/smoothie-guide/tabs/e-book',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/smoothie-guide/tabs/e-book',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmoothieGuidePageRoutingModule {}
