import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ReclamationsComponent } from './reclamations.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    ReclamationsComponent,
    ListReclamationsComponent,
    AddReclamationComponent

  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
     RouterModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ReclamationsModule { }
