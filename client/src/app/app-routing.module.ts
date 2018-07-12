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


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'career', component: CareerComponent },
  {path: 'what-we-stand-for', component: WhatWeStandForComponent },
  {path: 'directors', component: DirectorsComponent },
  {path: 'corporate-responsibility', component: CorporateResponsibilityComponent },
  {path: 'fortune', component: FortuneCookieComponent },
  {path: 'for-doctors', component: ForDoctorsComponent },
  {path: 'for-patients', component: ForPatientComponent },
  {path: 'social', component: SocialMediaComponent },
  {path: 'our-stories', component: OurStoriesComponent },
  {path: 'queries', component: QueriesComponent },
  {path: 'terms-and-conditions', component: ForDoctorsComponent },
  {path: 'disclaimer', component: DisclaimerComponent },
  {path: 'terms-for-patients', component: TermsForPatientsComponent },
  {path: 'terms-for-doctors', component: TermsconditionsComponent },
  {path: 'ecom', loadChildren: 'app/modules/ecommerce/ecommerce.module#EcommerceModule' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*export const routingComponents = [LoginComponent,SignupComponent,ForgotPasswordComponent,
  ContentComponent,ExceptionComponent,UnauthorizedComponent]*/
