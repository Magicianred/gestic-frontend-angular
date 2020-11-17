import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from './session.service';
import { LoginService } from './login.service';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new authenticated header.
    const authReq = req.clone({
      url: environment.baseUrl + req.url,
      headers: req.headers.set('Authorization', SessionService.getToken())
    });

    // Pass on the cloned request instead of the original request.
    return next.handle(authReq)
      .pipe(
        tap(event => {}, err => {
          // If unauthorized request
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.loginService.logout();
          }
        })
      );
  }

}
