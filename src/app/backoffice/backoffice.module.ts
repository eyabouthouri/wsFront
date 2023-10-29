
import { FooterbackComponent } from './footerback/footerback.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ProduitbackComponent } from './produitback/produitback.component';
import { AffichreponseComponent } from './reclamations-admin/affichreponse/affichreponse.component';



@NgModule({
  declarations: [
    BackofficeComponent,
    ReclamationsAdminComponent,
    ProduitbackComponent,
    AffichreponseComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    HttpClientModule,
    BackofficeRoutingModule,ReactiveFormsModule
  ]
})
export class BackofficeModule {
}
