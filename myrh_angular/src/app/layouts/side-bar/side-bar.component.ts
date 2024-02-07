import { Component, OnInit } from '@angular/core';
import { JobSeeker } from '../../model/jobSeeker.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
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
