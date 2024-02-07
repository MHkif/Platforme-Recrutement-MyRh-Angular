import { JobSeeker } from '../../model/jobSeeker.model';

export interface ApplicantAuthState {
  applicant: JobSeeker | null;
  isLogged: boolean;
}

export const initialState: ApplicantAuthState = {
  applicant: null,
  isLogged: false,
};
