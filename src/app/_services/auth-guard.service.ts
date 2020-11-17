import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route } from '@angular/router';
import { SessionService } from './session.service';
import { LoginService } from './login.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    return this.checkLogin(`/${route.path}`);
  }

  checkLogin(url: string): boolean {
    // Success
    if (SessionService.isUserLoggedIn()) {
      return true;
    }
    // Error
    else {
      // Store the attempted URL for redirecting
      if (url !== '/' && url !== '/login') {
        SessionService.redirectUrl = url;
      }
      this.loginService.triggerLoginAction();
      return false;
    }
  }
}
