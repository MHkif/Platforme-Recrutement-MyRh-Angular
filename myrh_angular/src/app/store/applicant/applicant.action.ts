import { createAction, props } from '@ngrx/store';
import { JobSeeker } from '../../model/jobSeeker.model';

export const APPLICANT_LOGIN_START = '[auth/applicant] APPLICANT login start';
export const APPLICANT_LOGIN_SUCCESS =
  '[auth/applicant] APPLICANT login success';
export const APPLICANT_LOGIN_FAIL = '[auth/applicant] APPLICANT login fail';

export const APPLICANT_LOGOUT = '[auth/applicant] APPLICANT logout start';

export const APPLICANT_SIGNUP_START =
  '[auth/applicant] APPLICANT sign up start';
export const APPLICANT_SIGNUP_SUCCESS =
  '[auth/applicant] APPLICANT sign up success';
export const APPLICANT_SIGNUP_FAIL = '[auth/applicant] APPLICANT sign up fail';

// LOGIN
export const applicantStartLogin = createAction(
  APPLICANT_LOGIN_START,
  props<{ email: string; password: string }>()
);

export const applicantLogout = createAction(APPLICANT_LOGOUT);
export const applicantLoginSuccess = createAction(
  APPLICANT_LOGIN_SUCCESS,
  props<{ jobSeeker: JobSeeker; isLogged: boolean }>()
);

//  SIGN UP

export const applicantStartRegister = createAction(
  APPLICANT_SIGNUP_START,
  props<{ jobSeeker: JobSeeker }>()
);

export const applicantRegisterSuccess = createAction(
  APPLICANT_SIGNUP_SUCCESS,
  props<{ jobSeeker: JobSeeker; isLogged: boolean }>()
);
