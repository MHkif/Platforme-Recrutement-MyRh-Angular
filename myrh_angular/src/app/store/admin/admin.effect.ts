import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { adminLoginStart, adminLoginSuccess } from './admin.action';
import { defer, exhaustMap, map, of } from 'rxjs';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminEffect {
  constructor(
    private actions$: Actions,
    private service: AdminService,
    private route: Router
  ) {}

  adminLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminLoginStart),
      exhaustMap((action) => {
        console.log('Action : ', action);
        return this.service.auth(action.email, action.password).pipe(
          map((data) => {
            console.log('Data :', data);
            const admin = this.service.formatAdmin(data);
            console.log('Admin : ', admin);
            localStorage.setItem('admin', JSON.stringify(admin));
            this.route.navigate(['/admin']);
            return adminLoginSuccess({ admin: admin, isLogged: true });
          })
        );
      })
    )
  );

  init$ = createEffect(() =>
    defer(() => {
      const adminData = localStorage.getItem('admin');
      if (adminData) {
        return of(
          adminLoginSuccess({ admin: JSON.parse(adminData), isLogged: true })
        );
      } else {
        return of();
      }
    })
  );
}
