import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offer/offers/offers.component';
import { OfferCardComponent } from './offer/offer-card/offer-card.component';
import { RegisterComponent } from './auth/company/register/register.component';
import { LoginComponent } from './auth/company/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { OfferHolderComponent } from './offer/offer-holder/offer-holder.component';
import { OfferFormComponent } from './offer/offer-form/offer-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffect } from './store/company/company.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer } from './store/state/app.state';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthGuard } from './service/auth.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { OfferDetailComponent } from './offer/offer-detail/offer-detail.component';
import { AdminLoginComponent } from './auth/admin/login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AccountValidationComponent } from './auth/account-validation/account-validation.component';
import { CandidatRegisterComponent } from './auth/applicant/register/candidat-register.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard.component';
import { AdminOfferListComponent } from './shared/admin/admin-offer-list/admin-offer-list.component';
import { CommonModule } from '@angular/common';
import { JobSeekerLoginComponent } from './auth/applicant/login/login.component';
import { CompanyDashboardComponent } from './features/company/dashboard/company-dashboard.component';
import { CandidatesInsightsComponent } from './features/company/candidats-insights/candidates-insights.component';

import { JobApplicantsComponent } from './features/company/job-applicants/job-applicants.component';

import { JobSeekerNavbarComponent } from './shared/job-seeker/job-seeker-navbar/job-seeker-navbar.component';
import { JobSeekerDashboardComponent } from './features/candidat/dashboard/job-seeker-dashboard.component';
import { JobSeekerApplicationSocketConfigService } from './service/jobSeeker/job-application-config/job-seeker-application-socket-config.service';
import { AdminEffect } from './store/admin/admin.effect';
import { ApplicantEffect } from './store/applicant/applicant.effect';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { CompanyLayoutComponent } from './features/company/company-layout/company-layout.component';
import { CompanySideBarComponent } from './features/company/company-side-bar/company-side-bar.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { PaymentSuccessComponent } from './shared/payment/payement-success/payment-success.component';
import { PaymentCancelComponent } from './shared/payment/payement-cancel/payment-cancel.component';
import { AdminLayoutComponent } from './features/admin/admin-layout/admin-layout.component';
import { AdminSideBarComponent } from './features/admin/admin-side-bar/admin-side-bar.component';
import { ApplicantLayoutComponent } from './features/candidat/applicant-layout/applicant-layout.component';
import { ApplicanSideBarComponent } from './features/candidat/applican-side-bar/applican-side-bar.component';
import { MyApplicantsComponent } from './features/candidat/my-applicants/my-applicants.component';
import { AuthAdminGuard } from './core/guards/admin/auth-admin.guard';
import { AuthCompanyGuard } from './core/guards/company/auth-company-guard.guard';

const MODULES = [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  HttpClientModule,
  StoreModule.forRoot(appReducer),
  EffectsModule.forRoot([CompanyEffect, AdminEffect, ApplicantEffect]),
  StoreDevtoolsModule.instrument({
    logOnly: !isDevMode(),
  }),
  BrowserAnimationsModule,
  AngularToastifyModule,
];

const OFFER_COMPONENT = [
  OffersComponent,
  OfferCardComponent,
  OfferHolderComponent,
  OfferFormComponent,
  OfferDetailComponent,
];

const LAYOUTS = [
  LayoutComponent,
  AuthLayoutComponent,
  CompanyLayoutComponent,
  ApplicantLayoutComponent,
  AdminLayoutComponent,
];

const APPLICANT_COMPONENT = [
  CandidatRegisterComponent,
  CandidatesInsightsComponent,
  JobApplicantsComponent,
  JobSeekerNavbarComponent,
  JobSeekerDashboardComponent,
  JobSeekerLoginComponent,
  ApplicanSideBarComponent,
  MyApplicantsComponent,
];

const COMPANY_COMPONENT = [
  CompanyDashboardComponent,
  CompanySideBarComponent,
  AccountValidationComponent,
  RegisterComponent,
  LoginComponent,
];

const ADMIN_COMPONENT = [
  AdminDashboardComponent,
  AdminOfferListComponent,
  AdminLoginComponent,
  AdminHomeComponent,
  AdminSideBarComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    PaymentSuccessComponent,
    PaymentCancelComponent,
    SideBarComponent,
    ...COMPANY_COMPONENT,
    ...ADMIN_COMPONENT,
    ...APPLICANT_COMPONENT,
    ...LAYOUTS,
    ...OFFER_COMPONENT,
  ],
  imports: [...MODULES],
  providers: [
    AuthGuard,
    AuthAdminGuard,
    AuthCompanyGuard,
    JobSeekerApplicationSocketConfigService,
    ToastService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
