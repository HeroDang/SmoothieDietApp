import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookquickstartPage } from './bookquickstart.page';

const routes: Routes = [
  {
    path: '',
    component: BookquickstartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookquickstartPageRoutingModule {}
