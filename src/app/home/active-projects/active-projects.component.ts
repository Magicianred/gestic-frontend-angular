import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/project';


@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.scss']
})
export class ActiveProjectsComponent implements OnInit {
  activeProjectsList: Project[] = [];

  constructor(private router: Router,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getActiveProjects()
      .subscribe(listOfProjects => {
        this.activeProjectsList = listOfProjects;
      });
  }

  goToProjectDetails(projectItem): void {
    this.router.navigate([ 'home', 'active-projects', projectItem.id ]);
  }

}
