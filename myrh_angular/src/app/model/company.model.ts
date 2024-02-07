import {EntityState} from '@ngrx/entity';

export interface Company {
  id: number | null | undefined;
  name: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
  image: string | null | undefined;
  enabled: boolean | null | undefined;
}

export interface PageCompany {
  content: Array<Company>;
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

export interface CompanyModel extends EntityState<Company> {
}

export interface CompanySubscribeRequest {
  companyId: String;
  subscriptionStatus: SubscriptionStatus;
  token: String;
}


export enum SubscriptionStatus {
  FREEMIUM, BASIC, PREMIUM
}
