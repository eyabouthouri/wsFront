import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ReponseComponent } from './reclamations-admin/reponse/reponse.component';
import { AffichreponseComponent } from './reclamations-admin/affichreponse/affichreponse.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },

           {path:'adminrec',component:ReclamationsAdminComponent},
           { path: 'reponse/:id', component: ReponseComponent },
           { path: 'afff/:id', component: AffichreponseComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
