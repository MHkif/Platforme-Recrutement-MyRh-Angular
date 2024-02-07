import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/state/app.state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthCompanyGuard implements CanActivate {
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
      .select('companyAuth')
      .subscribe((state) => (this.isLoggedIn = state.isLogged));
    if (this.isLoggedIn) {
      return true;
    } else {
      this._router.navigateByUrl('/company/auth/login');
      return false;
    }
  }
}
