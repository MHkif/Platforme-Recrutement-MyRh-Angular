import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { adminLoginStart, adminLoginSuccess } from './admin.action';
import { exhaustMap, map } from 'rxjs';
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
            this.route.navigate(['/admin']);
            return adminLoginSuccess({ admin: admin, isLogged: true });
          })
        );
      })
    )
  );
}
