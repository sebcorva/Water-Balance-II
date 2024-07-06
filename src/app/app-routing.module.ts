import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'consejos',
    redirectTo: 'consejos',
    pathMatch: 'full'
  },
  {
    path: 'meta',
    redirectTo: 'meta',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'historial',
    redirectTo: 'historial',
    pathMatch: 'full'
  },
  {
    path: 'meta-alcanzada',
    redirectTo: 'meta-alcanzada',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'consejos',
    loadChildren: () => import('./consejos/consejos.module').then( m => m.ConsejosPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'meta',
    loadChildren: () => import('./meta/meta.module').then( m => m.MetaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'meta-alcanzada',
    loadChildren: () => import('./meta-alcanzada/meta-alcanzada.module').then( m => m.MetaAlcanzadaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
