import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './_utils/not-found.component';
import { BulletinBoardModule } from './bulletin-board/bulletin-board.module';
import { ActiveProjectsModule } from './active-projects/active-projects.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    DashboardModule,
    BulletinBoardModule,
    ActiveProjectsModule,
    UsersModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    UserRegisterComponent
  ],
  entryComponents: [],
  providers: []
})
export class HomeModule {}
