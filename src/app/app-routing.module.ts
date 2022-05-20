import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    redirectTo: 'startup',
    pathMatch: 'full'
  },
  {
    path: 'startup',
    loadChildren: () => import('./startup/startup.module').then( m => m.StartupPageModule)
  },
  {
    path: 'mainapp',
    loadChildren: () => import('./mainapp/mainapp.module').then( m => m.MainappPageModule)
=======
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
>>>>>>> afe9da05181b57e2cde2ccb878dcaa1184ca3f2f
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
