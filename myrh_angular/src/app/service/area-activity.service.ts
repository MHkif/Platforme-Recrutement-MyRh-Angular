import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseHttp } from '../model/responseData.model';
import { Observable } from 'rxjs';
import { PageareaActivity } from '../model/areaActivity.model';

@Injectable({
  providedIn: 'root'
})
export class AreaActivityService {

  private base_url = 'http://localhost:8080/myrh/api/v1/areaActivity';
  constructor(private http: HttpClient) {}

  public louadAreaActivity(): Observable<PageareaActivity> {
    console.log('form AreaActivityService')
    return this.http.get<PageareaActivity>(this.base_url+'?page=0&size=2');
  }


}
