import { Action, createReducer, on } from '@ngrx/store';
import { ApplicantAuthState, initialState } from './applicant.state';
import { applicantLoginSuccess } from './applicant.action';

const _authReducer = createReducer(
  initialState,
  on(applicantLoginSuccess, (state, action) => {
    return {
      ...state,
      applicant: action.jobSeeker,
      isLogged: action.isLogged,
    };
  })
);

export function applicantAuthReducer(state: ApplicantAuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
