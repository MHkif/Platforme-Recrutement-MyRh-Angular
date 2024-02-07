export interface Offer {
  id: number;
  title: string;
  description: string;
  company: any;
  profile: any;
  city: any;
  level: any;
  status: any;
  salary: number;
}

export interface PageOffers {
  content: Array<Offer>;
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

export enum OfferStatus {
  ACCEPTED = 'ACCEPTED',
  PENDING = 'PENDING',
  REFUSED = 'REFUSED',
}

export interface JobSeekerOfferInsightsResponse {
  candidateOffersApplyCollection: CandidateOffersApplyCollection[];
  jobSeeker_id: number;
  jobSeeker_name: any;
  nb_job_accepted: number;
  nb_job_refused: number;
  nb_job_waiting: number;
  nb_job_in_process: number;
  jobSeeker_status: UserStatus;
}

export enum UserStatus {
  ONLINE= 'ONLINE',
  OFFLINE= 'OFFLINE',
  BUSY= 'BUSY',
  ALL= 'ALL'
}


export interface CandidateOffersApplyCollection {
  offerId: number;
  offerTitle: string;
}
