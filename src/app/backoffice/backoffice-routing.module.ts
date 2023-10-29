import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ProduitComponent } from '../frontoffice/produit/produit.component';
import { ProduitbackComponent } from './produitback/produitback.component';
import { AddproduitComponent } from './addproduit/addproduit.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },

           {path:'adminrec',component:ReclamationsAdminComponent}, {path:'produit',component:ProduitbackComponent},
{path:"addproduct",component:AddproduitComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
