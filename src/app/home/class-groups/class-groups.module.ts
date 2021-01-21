import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassGroupsComponent } from './class-groups.component';
import { SharedModule } from '../shared.module';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupService } from '../_services/group.service';


@NgModule({
  declarations: [
    ClassGroupsComponent,
    GroupDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    GroupService
  ]
})
export class ClassGroupsModule { }
