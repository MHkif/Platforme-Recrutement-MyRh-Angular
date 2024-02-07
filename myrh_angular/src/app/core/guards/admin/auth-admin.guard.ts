import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  isLoggedIn!: boolean | null;
  constructor(private _router: Router, private _store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this._store
      .select('adminAuth')
      .subscribe((state) => (this.isLoggedIn = state.isLogged));
    if (this.isLoggedIn) {
      return true;
    } else {
      this._router.navigateByUrl('/admin/auth/login');
      return false;
    }
  }
}
