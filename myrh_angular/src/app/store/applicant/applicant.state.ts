import { JobSeeker } from '../../model/jobSeeker.model';

export interface ApplicantAuthState {
  applicant: JobSeeker;
  isLogged: boolean;
}

export const initialState: ApplicantAuthState = {
  applicant: Object(),
  isLogged: false,
};
