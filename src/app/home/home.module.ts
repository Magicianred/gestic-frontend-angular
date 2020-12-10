import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './_utils/not-found.component';
import { BulletinBoardModule } from './bulletin-board/bulletin-board.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    DashboardModule,
    BulletinBoardModule,
    UsersModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  entryComponents: [],
  providers: []
})
export class HomeModule {}
