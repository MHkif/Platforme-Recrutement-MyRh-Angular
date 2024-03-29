import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private base_url = 'http://localhost:8080/myrh/api/v1/profiles/';
  constructor(private http: HttpClient) {}

  public loadProfiles(id: number): Observable<Array<Profile>> {
    return this.http.get<Array<Profile>>(this.base_url + 'activity/' + id);
  }

  public getOne(id: number): Observable<Profile> {
    return this.http.get<Profile>(this.base_url + id);
  }
}
