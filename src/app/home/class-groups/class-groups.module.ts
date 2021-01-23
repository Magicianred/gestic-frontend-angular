import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassGroupsComponent } from './class-groups.component';
import { SharedModule } from '../shared.module';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupService } from '../_services/group.service';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassGroupsComponent,
    GroupDetailsComponent,
    CreateGroupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    GroupService
  ]
})
export class ClassGroupsModule { }
