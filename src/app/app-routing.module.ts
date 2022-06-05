import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'smoothie-guide',
    pathMatch: 'full'
  },
  {
    path: 'smoothie-guide',
    loadChildren: () => import('./smoothie-guide/smoothie-guide.module').then( m => m.SmoothieGuidePageModule)
  },  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
