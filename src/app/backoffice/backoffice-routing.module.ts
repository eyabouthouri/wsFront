import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ProduitComponent } from '../frontoffice/produit/produit.component';
import { ProduitbackComponent } from './produitback/produitback.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { AffichreponseComponent } from './reclamations-admin/affichreponse/affichreponse.component';
import { ReponseComponent } from './reclamations-admin/reponse/reponse.component';
import { CommandebackComponent } from './commandeback/commandeback.component';


const routes: Routes = [{ path: '', component: BackofficeComponent },

           {path:'adminrec',component:ReclamationsAdminComponent}, {path:'produit',component:ProduitbackComponent},
           {path:"addproduct",component:AddproduitComponent},
           { path: 'reponse/:id', component: ReponseComponent },
           { path: 'afff/:id', component: AffichreponseComponent },
           { path: 'commande', component: CommandebackComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
