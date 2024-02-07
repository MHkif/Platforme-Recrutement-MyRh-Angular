import { createAction, props } from '@ngrx/store';
import { Admin } from '../../model/admin.model';

export const ADMIN_LOGIN_START = '[auth/admin] login start';
export const ADMIN_LOGIN_SUCCESS = '[auth/admin] login success';
export const ADMIN_LOGIN_FAIL = '[auth/admin] login fail';

export const adminLoginStart = createAction(
  ADMIN_LOGIN_START,
  props<{ email: string; password: string }>()
);
export const adminLoginSuccess = createAction(
  ADMIN_LOGIN_SUCCESS,
  props<{ admin: Admin; isLogged: boolean }>()
);
