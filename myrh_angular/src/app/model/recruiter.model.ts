export interface Recruiter {
  first_name: string | null | undefined;
  last_name: string | null | undefined;
  company: any | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
  image: string | null | undefined;
}

export interface PageRecruiter {
  content: Array<Recruiter>;
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
