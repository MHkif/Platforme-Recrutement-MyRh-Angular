import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../../service/company.service';
import { exhaustMap, map } from 'rxjs';
import { Router } from '@angular/router';
import {
  company_loginStart,
  company_loginSuccess,
  company_signUpStart,
} from './company.action';

@Injectable()
export class CompanyEffect {
  constructor(
    private action$: Actions,
    private service: CompanyService,
    private route: Router
  ) {}

  companyRegister$ = createEffect(() =>
    this.action$.pipe(
      ofType(company_signUpStart),
      exhaustMap((action) => {
        return this.service.save(action.company_data).pipe(
          map((data) => {
            console.log('Company data: ', data);
            this.route.navigate(['/company/dashboard']);
            return company_loginSuccess({ company: data, isLogged: true });
          })
        );
      })
    )
  );

  companyLogin$ = createEffect(() =>
    this.action$.pipe(
      ofType(company_loginStart),
      exhaustMap((action) => {
        return this.service.auth(action.email, action.password).pipe(
          map((data) => {
            const company = this.service.formatCompany(data);
            console.log('Company : ', company);
            this.route.navigate(['/company/dashboard']);
            return company_loginSuccess({ company: company, isLogged: true });
          })
        );
      })
    )
  );
}
