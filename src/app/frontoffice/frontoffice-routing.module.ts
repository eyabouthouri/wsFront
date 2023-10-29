
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { ProduitComponent } from './produit/produit.component';


const routes: Routes = [{ path: '', component: FrontofficeComponent },

{ path: 'reclamations', loadChildren: () => import('./reclamations/reclamations.module').then(m => m.ReclamationsModule) },
{ path: 'medecins', component: MedecinsComponent},
{ path: 'produits', component: ProduitComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
