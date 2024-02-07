import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { JobSeeker } from '../../../model/jobSeeker.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './job-seeker-dashboard.component.html',
  styleUrls: ['./job-seeker-dashboard.component.css'],
})
export class JobSeekerDashboardComponent implements OnInit {
  applicant!: JobSeeker | null;
  isLogged!: boolean | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('applicantAuth')
      .subscribe(
        (state) => (
          (this.applicant = state.applicant),
          (this.isLogged = state.isLogged),
          console.log('Applicant : ', state.applicant)
        )
      );
    console.log('Applicant Side bar: ', this.applicant);
    console.log('isLogged Side bar : ', this.isLogged);
  }
}
