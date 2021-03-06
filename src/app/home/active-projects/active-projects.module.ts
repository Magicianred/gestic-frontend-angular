import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects.component';
import { SharedModule } from '../shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectService } from '../_services/project.service';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ActiveProjectsComponent, ProjectDetailsComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService
  ]
})
export class ActiveProjectsModule { }
