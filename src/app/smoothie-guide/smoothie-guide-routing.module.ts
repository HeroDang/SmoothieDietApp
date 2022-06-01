import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmoothieGuidePage } from './smoothie-guide.page';

const routes: Routes = [
  {
    path: '',
    component: SmoothieGuidePage
  },
  {
    path: 'e-book',
    loadChildren: () => import('./e-book/e-book.module').then( m => m.EBookPageModule)
  },
  {
    path: 'guide',
    loadChildren: () => import('./guide/guide.module').then( m => m.GuidePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmoothieGuidePageRoutingModule {}
