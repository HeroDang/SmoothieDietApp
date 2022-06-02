import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidePage } from './guide.page';

const routes: Routes = [
  {
    path: '',
    component: GuidePage
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
  },
  {
    path: 'day-detail',
    loadChildren: () => import('./day-detail/day-detail.module').then( m => m.DayDetailPageModule)
  },
  {
    path: 'dayof21days',
    loadChildren: () => import('./dayof21days/dayof21days.module').then( m => m.Dayof21daysPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidePageRoutingModule {}
