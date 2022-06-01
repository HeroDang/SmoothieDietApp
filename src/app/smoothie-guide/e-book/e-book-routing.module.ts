import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EBookPage } from './e-book.page';

const routes: Routes = [
  {
    path: '',
    component: EBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EBookPageRoutingModule {}
