import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {CompanySubscribeRequest} from "../../model/company.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanySubscriptionServiceService {

  private baseUrl=environment.backendHost+"/myrh/api/v1/company/subscriptions";
  constructor(
    private http: HttpClient
  ) { }

  subscribe(companySubscribeRequest:CompanySubscribeRequest):Observable<String>{
    console.log("subscribe to company")
    return this.http.post(this.baseUrl+"/subscribe",companySubscribeRequest) as Observable<String>;
  }
}
