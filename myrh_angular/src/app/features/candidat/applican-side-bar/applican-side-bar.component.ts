import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { JobSeeker } from '../../../model/jobSeeker.model';

@Component({
  selector: 'app-applican-side-bar',
  templateUrl: './applican-side-bar.component.html',
  styleUrls: ['./applican-side-bar.component.css'],
})
export class ApplicanSideBarComponent implements OnInit {
  applicant!: JobSeeker | null;
  isLogged!: boolean | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('applicantAuth').subscribe(
      (state) => (
        (this.isLogged = state.isLogged),
        (this.applicant = state.applicant),
        // console.log('State :', state),
        console.log(
          'isLogged  : ',
          this.isLogged,
          ', Applicant :',
          this.applicant
        )
      )
    );
  }
}
