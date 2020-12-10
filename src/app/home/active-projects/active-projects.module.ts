import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [ActiveProjectsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ActiveProjectsModule { }
