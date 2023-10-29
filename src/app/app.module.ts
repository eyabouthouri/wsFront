import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { HeaderComponent } from './frontoffice/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderbackComponent } from './backoffice/headerback/headerback.component';
import { FooterbackComponent } from './backoffice/footerback/footerback.component';
import { CommonModule } from '@angular/common';
import { BackofficeModule } from './backoffice/backoffice.module';
import { ReponseComponent } from './backoffice/reclamations-admin/reponse/reponse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,HeaderbackComponent,FooterbackComponent, ReponseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, FrontofficeModule,CommonModule,BackofficeModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
