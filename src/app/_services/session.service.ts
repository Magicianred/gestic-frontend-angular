import { Injectable } from '@angular/core';
import { User } from '../home/_models/user';


@Injectable()
export class SessionService {
  static redirectUrl: string;

  static setToken(token: string) {
    localStorage.setItem('user_token', token);
  }

  static getToken(): string {
    return localStorage.getItem('user_token');
  }

  static setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static getUser(): any {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user) ? new User(user) : null;
  }

  static clear() {
    localStorage.clear();
  }

  static getDefaultHomePageUrl(): string {
    return '/home/dashboard';
  }

  static isUserLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
