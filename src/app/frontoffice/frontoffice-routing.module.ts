
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';


const routes: Routes = [{ path: '', component: FrontofficeComponent },

{ path: 'reclamations', loadChildren: () => import('./reclamations/reclamations.module').then(m => m.ReclamationsModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
