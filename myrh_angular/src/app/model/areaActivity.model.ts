
export interface AreaActivity{
    id:number;
    description:string;
}

export interface PageareaActivity {
    content: Array<AreaActivity>;
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