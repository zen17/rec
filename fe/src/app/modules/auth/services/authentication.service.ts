import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootService } from '../../core/services/root.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends RootService {
  private auth = '/auth/login';
  //private apiURL = 'https://rec-be-dot-recenzija-270220.appspot.com/api';
  private profile = '/profile';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAuthToken(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.rootApiUrl + this.auth, { username, password });
  }

  getUserData(): Observable<any> {
    return this.httpClient.get(this.rootApiUrl + this.profile);

  }
}