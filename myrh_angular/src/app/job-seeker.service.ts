import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ResponseHttp } from './model/responseData.model';
import { JobSeeker, PageJobSeeker } from './model/jobSeeker.model';

@Injectable({
  providedIn: 'root',
})
export class JobSeekerService {
  private base_url = 'http://localhost:8080/myrh/api/v1/jobSeekers';
  private backend_host = environment.backendHost;

  constructor(private http: HttpClient) {}

  public getAll(page: number, size: number): Observable<PageJobSeeker> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PageJobSeeker>(this.base_url, {
      params,
    });
  }

  public getOne(id: string): Observable<JobSeeker> {
    return this.http.get<JobSeeker>(this.base_url + '/' + id);
  }

  public save(company: JobSeeker) {
    return this.http.post<JobSeeker>(this.base_url, company);
  }

  public auth(email: string, password: string): Observable<ResponseHttp> {
    return this.http.post<ResponseHttp>(this.base_url + '/auth', {
      email,
      password,
    });
  }

  jobSeekerMapper(res: ResponseHttp) {
    let jobSeekerRes = res.data.response;
    const jobSeeker: JobSeeker = {
      id: jobSeekerRes.id,
      last_name: jobSeekerRes.last_name,
      first_name: jobSeekerRes.first_name,
      email: jobSeekerRes.email,
      password: jobSeekerRes.password,
      image: jobSeekerRes.image,
      enabled: jobSeekerRes.enabled,
    };
    return jobSeeker;
  }
}
