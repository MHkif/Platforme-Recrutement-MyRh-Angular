import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JobSeekerService } from '../../job-seeker.service';
import {
  applicantLoginSuccess,
  applicantRegisterSuccess,
  applicantStartLogin,
  applicantStartRegister,
} from './applicant.action';

@Injectable()
export class ApplicantEffect {
  constructor(
    private actions$: Actions,
    private jobSeekerService: JobSeekerService,
    private route: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe( 
      ofType(applicantStartLogin),
      exhaustMap((action) => {
        return this.jobSeekerService.auth(action.email, action.password).pipe(
          map((data) => {
            console.log('data :', data);
            const jobSeeker = this.jobSeekerService.jobSeekerMapper(data);
            this.route.navigate(['/applicant/dashboard']);
            return applicantLoginSuccess({
              jobSeeker: jobSeeker,
              isLogged: true,
            });
          })
        );
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicantStartRegister),
      exhaustMap((action) => {
        return this.jobSeekerService.save(action.jobSeeker).pipe(
          map((jobSeeker) => {
            this.route.navigate(['/applicant/dashboard']);
            return applicantRegisterSuccess({
              jobSeeker: jobSeeker,
              isLogged: true,
            });
          })
        );
      })
    )
  );
}
