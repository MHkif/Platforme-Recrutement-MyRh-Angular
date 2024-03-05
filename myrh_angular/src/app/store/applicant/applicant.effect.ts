import { Actions, createEffect, ofType } from '@ngrx/effects';

import { defer, exhaustMap, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JobSeekerService } from '../../job-seeker.service';
import {
  applicantLoginSuccess,
  applicantLogout,
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
      ofType(applicantLogout),
      tap(() => {
        localStorage.removeItem('applicant');
        this.route.navigateByUrl('/applicant/auth/login');
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicantStartLogin),
      exhaustMap((action) => {
        return this.jobSeekerService.auth(action.email, action.password).pipe(
          map((data) => {
            const jobSeeker = this.jobSeekerService.jobSeekerMapper(data);
            localStorage.setItem('user', JSON.stringify(jobSeeker));
            this.route.navigate(['/applicant/']);
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
            this.route.navigate(['/applicant/']);
            return applicantRegisterSuccess({
              jobSeeker: jobSeeker,
              isLogged: true,
            });
          })
        );
      })
    )
  );

  init$ = createEffect(() =>
    defer(() => {
      const userData = localStorage.getItem('user');
      if (userData) {
        return of(
          applicantLoginSuccess({
            jobSeeker: JSON.parse(userData),
            isLogged: true,
          })
        );
      } else {
        return of();
      }
    })
  );
}
