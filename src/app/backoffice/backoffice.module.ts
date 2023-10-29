
import { FooterbackComponent } from './footerback/footerback.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ArticleslistComponent } from './articleslist/articleslist.component';
import { ArticlesaddComponent } from './articlesadd/articlesadd.component';



@NgModule({
  declarations: [
    BackofficeComponent,
    ReclamationsAdminComponent,
    ArticleslistComponent,
    ArticlesaddComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    HttpClientModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule {
}
