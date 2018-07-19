import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/*import { EcommerceModule } from './modules/ecommerce/ecommerce.module';*/
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { CareerComponent } from './static-content/career/career.component';
import { DirectorsComponent } from './static-content/directors/directors.component';
import { DisclaimerComponent } from './static-content/disclaimer/disclaimer.component';
import { ForDoctorsComponent } from './static-content/for-doctors/for-doctors.component';
import { ForPatientComponent } from './static-content/for-patient/for-patient.component';
import { FortuneCookieComponent } from './static-content/fortune-cookie/fortune-cookie.component';
import { OurStoriesComponent } from './static-content/our-stories/our-stories.component';
import { QueriesComponent } from './static-content/queries/queries.component';
import { TermsconditionsComponent } from './static-content/termsconditions/termsconditions.component';
import { TermsForPatientsComponent } from './static-content/terms-for-patients/terms-for-patients.component';
import { WhatWeStandForComponent } from './static-content/what-we-stand-for/what-we-stand-for.component';
import { SocialMediaComponent } from './static-content/social-media/social-media.component';
import { CorporateResponsibilityComponent } from './static-content/corporate-responsibility/corporate-responsibility.component';
import { FooterComponent } from './static-content/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './static-content/header/header.component';
import { HomeComponent } from './static-content/home/home.component';
import { Dataservice } from '../services/dataservice';
import { RemoteApiService } from "../services/remoteapi.service";
import { CartService } from "../services/cartservice";
import { TestComponent } from './static-content/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    DirectorsComponent,
    DisclaimerComponent,
    ForDoctorsComponent,
    ForPatientComponent,
    FortuneCookieComponent,
    OurStoriesComponent,
    QueriesComponent,
    TermsconditionsComponent,
    TermsForPatientsComponent,
    WhatWeStandForComponent,
    SocialMediaComponent,
    CorporateResponsibilityComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [Dataservice, RemoteApiService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
