import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },

{path:'adminrec',component:ReclamationsAdminComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
