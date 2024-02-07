import { Admin } from '../../model/admin.model';

export interface AdminAuthState {
  admin: Admin | null;
  isLogged: boolean;
}

export const initialState: AdminAuthState = {
  admin: null,
  isLogged: false,
};
