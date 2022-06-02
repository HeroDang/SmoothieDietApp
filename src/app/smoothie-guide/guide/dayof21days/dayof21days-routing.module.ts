import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dayof21daysPage } from './dayof21days.page';

const routes: Routes = [
  {
    path: '',
    component: Dayof21daysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dayof21daysPageRoutingModule {}
