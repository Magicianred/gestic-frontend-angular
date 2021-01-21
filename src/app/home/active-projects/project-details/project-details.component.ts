import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../_services/project.service';
import { Project } from '../../_models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectModel: Project;

  constructor(private activatedRoute: ActivatedRoute,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.projectId = params.get('projectId');

      if (this.projectId) {
        this.projectService.getProjectById(this.projectId)
          .subscribe(newProject => {
            this.projectModel = newProject;
          });
      }
    });
  }

}
