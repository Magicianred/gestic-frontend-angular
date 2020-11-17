import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { environment } from '../../environments/environment';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginService {
  private httpClient: HttpClient;

  constructor(private handler: HttpBackend,
              private router: Router) {
    this.httpClient = new HttpClient(handler);
  }

  login(userEmail: string, userPassword: string): Observable<void> {
    const encoded = btoa(userEmail + ':' + userPassword);
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + encoded);

    return this.httpClient
      .get(environment.baseUrl + '/login', { headers: headers, observe: 'response' })
      .pipe(
        map((response) => {
          SessionService.clear();
          SessionService.setUser(response.body);
          /* When preflight OPTIONS are called, it generates a header with a lower case "authorization"
          otherwise the auth-header is spelled "Authorization" */
          SessionService.setToken(response.headers.get('authorization') || response.headers.get('Authorization'));
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
