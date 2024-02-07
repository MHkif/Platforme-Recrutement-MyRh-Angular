import { Injectable } from '@angular/core';
import { ResponseHttp } from '../model/responseData.model';
import { Admin } from '../model/admin.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private base_url = 'http://localhost:8080/myrh/api/v1/admin';
  constructor(private http: HttpClient) {}

  public auth(email: string, password: string): Observable<ResponseHttp> {
    return this.http.post<ResponseHttp>(this.base_url + '/auth', {
      email,
      password,
    });
  }

  formatAdmin(res: ResponseHttp) {
    let adminRes = res.data.response;
    const admin: Admin = {
      id: adminRes.id,
      first_name: adminRes.first_name,
      last_name: adminRes.last_name,
      email: adminRes.email,
      password: adminRes.password,
      image: adminRes.image,
      enabled: adminRes.enabled,
    };
    return admin;
  }
}
