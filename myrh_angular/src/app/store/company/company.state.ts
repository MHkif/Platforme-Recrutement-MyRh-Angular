import { Company } from '../../model/company.model';

export interface CompanyAuthState {
  company: Company | null;
  isLogged: boolean;
}

export const initialState: CompanyAuthState = {
  company: null,
  isLogged: false,
};
