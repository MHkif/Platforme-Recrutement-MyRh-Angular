import { JobSeeker } from './jobSeeker.model';
import { Offer } from './offer.model';

export interface JobApplicant {
  JobApplicantId: JobApplicantId;
  createdDate: Date;
  jobSeeker: JobSeeker;
  offer: Offer;
  resume: File;
  isViewed: boolean;
  status: string;
}

export interface JobApplicantRequsest {
  JobApplicantId: JobApplicantId;
  createdDate: Date;
  jobSeeker: JobSeeker;
  resume: File;
  isViewed: boolean;
}

export interface CompanyJobApplicantReq {
  companyId: number;
  offerId: number;
  jobSeekerId: number;
  status: string;
}

export interface JobApplicantId {
  jobSeeker_id: number | Blob | string;
  offer_id: number | Blob | string;
}

export interface PageJobApplicant {
  content: Array<JobApplicant>;
  pageable: any;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: any;
  first: boolean;
  numberOfElements: boolean;
  empty: boolean;
}

export enum JobApplicantStatus {
  REFUSED = 'REFUSED',
  IN_PROCESS = 'IN_PROCESS',
  ACCEPTED = 'ACCEPTED',
  WAITING = 'WAITING',
}
