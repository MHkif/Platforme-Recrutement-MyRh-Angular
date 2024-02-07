import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Company } from '../model/company.model';
import { JobSeeker } from '../model/jobSeeker.model';
import { Admin } from '../model/admin.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  applicant!: JobSeeker | null;
  admin!: Admin | null;
  company!: Company | null;
  isLogged!: boolean | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('adminAuth')
      .subscribe(
        (state) => (
          (this.isLogged = state.isLogged), (this.admin = state.admin)
        )
      );
    this.store
      .select('companyAuth')
      .subscribe(
        (state) => (
          (this.isLogged = state.isLogged), (this.company = state.company)
        )
      );
    this.store
      .select('applicantAuth')
      .subscribe(
        (state) => (
          (this.isLogged = state.isLogged), (this.applicant = state.applicant)
        )
      );
  }
}
