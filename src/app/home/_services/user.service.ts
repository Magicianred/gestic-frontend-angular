import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  createNewUser(user: User): Observable<User> {
    return this.http
      .post<User>('/register', user)
      .pipe(
        map(newUser => new User(newUser))
      );
  }
}
