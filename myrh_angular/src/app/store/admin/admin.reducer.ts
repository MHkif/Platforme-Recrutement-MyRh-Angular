import { createReducer, on } from '@ngrx/store';
import { adminLoginSuccess } from './admin.action';
import { initialState } from './admin.state';

const _adminAuthReducer = createReducer(
  initialState,
  on(adminLoginSuccess, (state, action) => {
    console.log('_adminAuthReducer : action : ', action);

    return {
      ...state,
      admin: action.admin,
      isLogged: true,
    };
  })
);

export function AdminLoginReducer(state: any, action: any) {
  return _adminAuthReducer(state, action);
}
