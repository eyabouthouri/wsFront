import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ArticleslistComponent } from './articleslist/articleslist.component';
import { ArticlesaddComponent } from './articlesadd/articlesadd.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },

           {path:'adminrec',component:ReclamationsAdminComponent},
           {path:'listarticles',component:ArticleslistComponent},
           {path:"addarticle",component:ArticlesaddComponent},
           

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
