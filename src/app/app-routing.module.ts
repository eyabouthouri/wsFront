import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'backoffice', canActivate: [AuthGuard], loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) },
  { path: 'frontoffice', canActivate: [AuthGuard], loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
