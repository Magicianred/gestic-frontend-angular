import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects.component';
import { SharedModule } from '../shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectService } from '../_services/project.service';



@NgModule({
  declarations: [ActiveProjectsComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ProjectService
  ]
})
export class ActiveProjectsModule { }
