import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookdetoxPage } from './bookdetox.page';

const routes: Routes = [
  {
    path: '',
    component: BookdetoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookdetoxPageRoutingModule {}
