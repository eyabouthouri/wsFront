import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { ProduitComponent } from './produit/produit.component';
import { AddproduitComponent } from '../backoffice/addproduit/addproduit.component';

@NgModule({
  declarations: [
    FrontofficeComponent,
    MedecinsComponent,
    ProduitComponent,
    AddproduitComponent,
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class FrontofficeModule { }
