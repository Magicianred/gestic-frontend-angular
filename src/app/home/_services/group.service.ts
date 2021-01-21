import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../_models/group';

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }

  getClassGroups(): Observable<Group[]> {
    return this.http
      .get<Group[]>('/class-group')
      .pipe(
        map(groups => groups.map(newGroup => new Group(newGroup)))
      );
  }

}
