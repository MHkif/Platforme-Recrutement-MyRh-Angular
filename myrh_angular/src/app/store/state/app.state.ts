import { AdminLoginReducer } from '../admin/admin.reducer';

import { CompanyLoginReducer } from '../company/company.reducer';
import { ApplicantAuthState } from '../applicant/applicant.state';
import { applicantAuthReducer } from '../applicant/applicant.reducer';
import { CompanyAuthState } from '../company/company.state';
import { AdminAuthState } from '../admin/admin.state';

export interface AppState {
  companyAuth: CompanyAuthState;
  adminAuth: AdminAuthState;
  applicantAuth: ApplicantAuthState;
}

export const appReducer = {
  companyAuth: CompanyLoginReducer,
  adminAuth: AdminLoginReducer,
  applicantAuth: applicantAuthReducer,
};
