import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../_models/project';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  getActiveProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>('/project')
      .pipe(
        map(projects => projects.map(newProject => new Project(newProject)))
      );
  }

  getProjectById(projectId: string): Observable<Project> {
    return this.http
      .get<Project>(`/project/${projectId}`)
      .pipe(
        map(newProject => new Project(newProject))
      );
  }

  createNewProject(projectModel: Project): Observable<Project> {
    return this.http
      .post<Project>(`/project`, projectModel)
      .pipe(
        map(newProject => new Project(newProject))
      );
  }
}
