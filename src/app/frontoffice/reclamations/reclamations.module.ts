import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ReclamationsComponent } from './reclamations.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({

  declarations: [
    ReclamationsComponent,
    ListReclamationsComponent,
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
     RouterModule,
    FormsModule
  ]
})
export class ReclamationsModule { }
