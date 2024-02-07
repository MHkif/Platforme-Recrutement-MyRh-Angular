import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CompanyJobApplicantReq,
  JobApplicant,
  JobApplicantRequsest,
  PageJobApplicant,
} from '../model/jobApplicant.model';

@Injectable({
  providedIn: 'root',
})
export class JobApplicantService {
  private base_url = 'http://localhost:8080/myrh/api/v1/jobApplicants';

  constructor(private http: HttpClient) {}

  public save(jobApplicant: JobApplicantRequsest) {
    const formData = new FormData();
    formData.append(
      'id.jobSeeker_id',
      String(jobApplicant.JobApplicantId.jobSeeker_id)
    );
    formData.append(
      'id.offer_id',
      String(jobApplicant.JobApplicantId.offer_id)
    );
    formData.append('jobSeeker.id', String(jobApplicant.jobSeeker.id));
    formData.append('jobSeeker.first_name', jobApplicant.jobSeeker.first_name);
    formData.append('jobSeeker.last_name', jobApplicant.jobSeeker.last_name);
    formData.append('jobSeeker.email', jobApplicant.jobSeeker.email);

    formData.append('isViewed', jobApplicant.isViewed ? 'true' : 'false'); // Convert boolean to string

    if (jobApplicant.resume instanceof File) {
      formData.append('resume', jobApplicant.resume, jobApplicant.resume.name);
    }
    return this.http.post<JobApplicant>(this.base_url, formData);
  }

  public updateStatus(companyJobApplicantReq: CompanyJobApplicantReq) {
    return this.http.patch(
      this.base_url + '/companies/status',
      companyJobApplicantReq
    );
  }
  public getAll(page: number, size: number): Observable<PageJobApplicant> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PageJobApplicant>(this.base_url, {
      params,
    });
  }
  public getAllByCompany(companyId: number): Observable<Array<JobApplicant>> {
    return this.http.get<Array<JobApplicant>>(
      this.base_url + '/companies/' + companyId
    );
  }

  public getOne(code: string): Observable<JobApplicant> {
    return this.http.get<JobApplicant>(this.base_url + '/' + code);
  }
}
