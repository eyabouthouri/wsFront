import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReclamationsComponent } from './reclamations/reclamations.component';

@NgModule({
  declarations: [
    FrontofficeComponent,
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class FrontofficeModule { }
