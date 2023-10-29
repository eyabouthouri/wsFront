import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { AddrdvComponent } from './addrdv/addrdv.component';
import { ListrdvComponent } from './listrdv/listrdv.component';

import { ArticleComponent } from './article/article.component';

import { ProduitComponent } from './produit/produit.component';
import { AddproduitComponent } from '../backoffice/addproduit/addproduit.component';


@NgModule({
  declarations: [
    FrontofficeComponent,
    MedecinsComponent,
    AddrdvComponent,
    ListrdvComponent,

    ArticleComponent,

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
