import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, PageCompany } from '../model/company.model';
import { Observable } from 'rxjs';
import { ResponseHttp } from '../model/responseData.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private base_url = 'http://localhost:8080/myrh/api/v1/companies';
  constructor(private http: HttpClient) {}

  public getAll(page: number, size: number): Observable<PageCompany> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PageCompany>(this.base_url, {
      params,
    });
  }

  public getOne(code: string): Observable<Company> {
    return this.http.get<Company>(this.base_url + '/' + code);
  }

  public save(company: Company) {
    return this.http.post<Company>(this.base_url, company);
  }
  public confirmAccount(token: string): Observable<ResponseHttp> {
    const params = new HttpParams().set('token', token.toString());

    return this.http.get<ResponseHttp>(this.base_url + '/confirm-account', {
      params,
    });
  }
  public auth(email: string, password: string): Observable<ResponseHttp> {
    return this.http.post<ResponseHttp>(this.base_url + '/auth', {
      email,
      password,
    });
  }

  formatCompany(res: ResponseHttp) {
    let companyRes = res.data.response;
    const company: Company = {
      id: companyRes.id,
      name: companyRes.name,
      email: companyRes.email,
      password: companyRes.password,
      image: companyRes.image,
      enabled: companyRes.enabled,
    };
    return company;
  }

  sendVerification(token: string): Observable<ResponseHttp> {
    const params = new HttpParams().set('token', token);

    return this.http.get<ResponseHttp>(
      this.base_url + '/confirm-account/re-send',
      {
        params,
      }
    );
  }
}
