import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { UserService } from '../_services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    UsersComponent
  ],
  exports: [
  ],
  entryComponents: [
  ],
  providers: [
    UserService
  ]
})
export class UsersModule {}
