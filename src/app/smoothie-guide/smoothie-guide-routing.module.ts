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
        ],
      },
      {
        path: 'guide',
        children: [
          {
            path: '',
            loadChildren: () => import('./guide/guide.module').then( m => m.GuidePageModule)
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
