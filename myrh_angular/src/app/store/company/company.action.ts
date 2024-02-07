import { createAction, props } from '@ngrx/store';
import { Company } from '../../model/company.model';

export const COMPANY_LOGIN_START = '[auth/company] login start';
export const COMPANY_LOGIN_SUCCESS = '[auth/company] login success';
export const COMPANY_LOGIN_FAIL = '[auth/company] login fail';

export const COMPANY_SIGNUP_START = '[auth/company] sign up start';
export const COMPANY_SIGNUP_SUCCESS = '[auth/company] sign up success';
export const COMPANY_SIGNUP_FAIL = '[auth/company] sign up fail';

export const company_loginStart = createAction(
  COMPANY_LOGIN_START,
  props<{ email: string; password: string }>()
);

export const company_loginSuccess = createAction(
  COMPANY_LOGIN_SUCCESS,
  props<{ company: Company; isLogged: boolean }>()
);

export const company_signUpStart = createAction(
  COMPANY_SIGNUP_START,
  props<{ company_data: Company }>()
);

export const company_signUpSuccess = createAction(
  COMPANY_SIGNUP_SUCCESS,
  props<{ company: Company }>()
);
