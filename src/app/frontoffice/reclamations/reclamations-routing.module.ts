import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationsComponent } from './reclamations.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { SuccesComponent } from './succes/succes.component';

const routes: Routes = [{ path: '', component: ReclamationsComponent },
{ path: 'listreclamations', component: ListReclamationsComponent },
{ path: 'addreclamation', component: AddReclamationComponent },
{ path: 'success', component: SuccesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsRoutingModule { }
