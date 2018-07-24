import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CareerComponent} from './static-content/career/career.component';
import {WhatWeStandForComponent} from './static-content/what-we-stand-for/what-we-stand-for.component';
import {DirectorsComponent} from './static-content/directors/directors.component';
import {CorporateResponsibilityComponent} from './static-content/corporate-responsibility/corporate-responsibility.component';
import {HomeComponent} from './static-content/home/home.component';
import {FortuneCookieComponent} from './static-content/fortune-cookie/fortune-cookie.component';
import {ForDoctorsComponent} from './static-content/for-doctors/for-doctors.component';
import {ForPatientComponent} from './static-content/for-patient/for-patient.component';
import {SocialMediaComponent} from './static-content/social-media/social-media.component';
import {OurStoriesComponent} from './static-content/our-stories/our-stories.component';
import {QueriesComponent} from './static-content/queries/queries.component';
import {TermsconditionsComponent} from './static-content/termsconditions/termsconditions.component';
import {DisclaimerComponent} from './static-content/disclaimer/disclaimer.component';
import { TermsForPatientsComponent } from './static-content/terms-for-patients/terms-for-patients.component';
import { GovernmentComponent } from "./static-content/government/government.component";
import { ConsumerComponent } from "./static-content/consumer/consumer.component";
import { TreeComponent } from "./static-content/tree/tree.component";
import { AshokaComponent } from "./static-content/tree/ashoka/ashoka.component";
import { BanyanComponent } from "./static-content/tree/banyan/banyan.component";
import { NeemComponent } from "./static-content/tree/neem/neem.component";
import { GulmoharComponent } from "./static-content/tree/gulmohar/gulmohar.component";
import { SheeshamComponent } from "./static-content/tree/sheesham/sheesham.component";
import { PeepalComponent } from "./static-content/tree/peepal/peepal.component";
import { SalComponent } from "./static-content/tree/sal/sal.component";
import { TamarindComponent } from "./static-content/tree/tamarind/tamarind.component";
import { MangoComponent } from "./static-content/tree/mango/mango.component";
import { LycheeComponent } from "./static-content/tree/lychee/lychee.component";
import { EucalyptusComponent } from "./static-content/tree/eucalyptus/eucalyptus.component";
import {JamunComponent} from "./static-content/tree/jamun/jamun.component";
import {FeedbackComponent} from "./static-content/feedback/feedback.component";


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'career', component: CareerComponent },
  {path: 'what-we-stand-for', component: WhatWeStandForComponent },
  {path: 'directors', component: DirectorsComponent },
  {path: 'corporate-responsibility', component: CorporateResponsibilityComponent },
  {path: 'fortune', component: FortuneCookieComponent },
  {path: 'doctors', component: ForDoctorsComponent },
  {path: 'patients', component: ForPatientComponent },
  {path: 'social', component: SocialMediaComponent },
  {path: 'our-stories', component: OurStoriesComponent },
  {path: 'queries', component: QueriesComponent },
  {path: 'terms-and-conditions', component: ForDoctorsComponent },
  {path: 'disclaimer', component: DisclaimerComponent },
  {path: 'terms-for-patients', component: TermsForPatientsComponent },
  {path: 'terms-for-doctors', component: TermsconditionsComponent },
  {path: 'government', component: GovernmentComponent },
  {path: 'consumers', component: ConsumerComponent },
  {path: 'trees', component: TreeComponent },
  {path: 'ashoka', component: AshokaComponent },
  {path: 'banyan', component: BanyanComponent },
  {path: 'gulmohar', component: GulmoharComponent },
  {path: 'neem', component: NeemComponent },
  {path: 'peepal', component: PeepalComponent },
  {path: 'sheesham', component: SheeshamComponent },
  {path: 'tamarind', component: TamarindComponent },
  {path: 'sal', component: SalComponent },
  {path: 'eucalyptus', component: EucalyptusComponent },
  {path: 'mango', component: MangoComponent },
  {path: 'jamun', component: JamunComponent },
  {path: 'lychee', component: LycheeComponent },
  {path: '*', component: HomeComponent },
  {path: 'feedback', component: FeedbackComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*export const routingComponents = [LoginComponent,SignupComponent,ForgotPasswordComponent,
  ContentComponent,ExceptionComponent,UnauthorizedComponent]*/
