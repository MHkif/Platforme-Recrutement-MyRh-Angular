import { Component } from '@angular/core';
import { JobSeeker } from '../../model/jobSeeker.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
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
