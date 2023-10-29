
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { AddrdvComponent } from './addrdv/addrdv.component';
import { ListrdvComponent } from './listrdv/listrdv.component';


const routes: Routes = [{ path: '', component: FrontofficeComponent },
{ path: 'rdv/:id', component: AddrdvComponent},
{ path: 'listrdv/:id', component: ListrdvComponent},
{ path: 'reclamations', loadChildren: () => import('./reclamations/reclamations.module').then(m => m.ReclamationsModule) },
{ path: 'medecins', component: MedecinsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
