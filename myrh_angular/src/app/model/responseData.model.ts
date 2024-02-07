import { Timestamp } from 'rxjs';

export interface ResponseHttp {
  statusCode: number | null | undefined;
  path: string | null | undefined;
  status: string | null | undefined;
  message: string | null | undefined;
  developerMessage: string | null | undefined;
  timeStamp: Date | null | undefined;
  data: any;
}
