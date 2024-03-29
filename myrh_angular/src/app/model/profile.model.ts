import { AreaActivity } from "./areaActivity.model";

export interface Profile{
    id:number;
    name:string;
    activityArea:AreaActivity
}
export interface PageProfile {
    content: Array<Profile>;
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

  export interface ActivityArea {
    id: number;
    description: string;
  }

