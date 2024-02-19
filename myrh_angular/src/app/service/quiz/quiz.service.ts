import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../../model/question.model';
import { Observable } from 'rxjs';
import { ResponseHttp } from '../../model/responseData.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private base_url =
    environment.backendHost + '/myrh/api/v1/jobSeekers/test-verifier/';
  constructor(private http: HttpClient) {}

  public getQuizByProfile(profileId: number): Observable<ResponseHttp> {
    
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + 'token');
    return this.http.get<ResponseHttp>(
      this.base_url + parseInt(profileId.toString()),
      {
        headers,
      }
    );
  }
}
