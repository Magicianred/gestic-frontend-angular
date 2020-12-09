import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { environment } from '../../environments/environment';
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class LoginService {
  private httpClient: HttpClient;

  constructor(private handler: HttpBackend,
              private router: Router) {
    this.httpClient = new HttpClient(handler);
  }

  login(userEmail: string, userPassword: string): Observable<void> {
    const body = { 'email': userEmail, 'password': userPassword };

    return this.httpClient
      .post(environment.baseUrl + '/login', body, { observe: 'response', responseType:'json' })
      .pipe(
        map((response) => {
          SessionService.clear();
          SessionService.setUser(response.body);
          /* When preflight OPTIONS are called, it generates a header with a lower case "authorization"
          otherwise the auth-header is spelled "Authorization" */
          SessionService.setToken(response.body['token']);
        })
      );
  }

  logout(): void {
    // Empty local storage and redirect
    SessionService.clear();
    this.router.navigate(['/login']);
  }

  triggerLoginAction(): void {
    this.router.navigate(['/login']);
  }
}
