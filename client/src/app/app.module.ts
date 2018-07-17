import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { GovernmentComponent } from './static-content/government/government.component';
import { ConsumerComponent } from './static-content/consumer/consumer.component';
import { TreeComponent } from './static-content/tree/tree.component';
import { BanyanComponent } from './static-content/tree/banyan/banyan.component';
import { PeepalComponent } from './static-content/tree/peepal/peepal.component';
import { NeemComponent } from './static-content/tree/neem/neem.component';
import { EucalyptusComponent } from './static-content/tree/eucalyptus/eucalyptus.component';
import { JamunComponent } from './static-content/tree/jamun/jamun.component';
import { TamarindComponent } from './static-content/tree/tamarind/tamarind.component';
import { GulmoharComponent } from './static-content/tree/gulmohar/gulmohar.component';
import { MangoComponent } from './static-content/tree/mango/mango.component';
import { LycheeComponent } from './static-content/tree/lychee/lychee.component';
import { AshokaComponent } from './static-content/tree/ashoka/ashoka.component';
import { SalComponent } from './static-content/tree/sal/sal.component';
import { SheeshamComponent } from './static-content/tree/sheesham/sheesham.component';
import { PaginationComponent } from './static-content/tree/pagination/pagination.component';


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
    GovernmentComponent,
    ConsumerComponent,
    TreeComponent,
    BanyanComponent,
    PeepalComponent,
    NeemComponent,
    EucalyptusComponent,
    JamunComponent,
    TamarindComponent,
    GulmoharComponent,
    MangoComponent,
    LycheeComponent,
    AshokaComponent,
    SalComponent,
    SheeshamComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ Dataservice, RemoteApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
