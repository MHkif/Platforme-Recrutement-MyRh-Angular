import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/state/app.state';
import { Store } from '@ngrx/store';
import { JobSeeker } from '../../../model/jobSeeker.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  applicant!: JobSeeker | null;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store
      .select('applicantAuth')
      .subscribe((state) => (this.applicant = state.applicant));
  }
}
