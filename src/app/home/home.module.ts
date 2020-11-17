import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { NavTabService } from './_services/nav-tab.service';
import { NestedNavbarComponent } from './_utils/nested-navbar/nested-navbar.component';
import { PageNotFoundComponent } from './_utils/not-found.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    DashboardModule,
    UsersModule
  ],
  declarations: [
    HomeComponent,
    NestedNavbarComponent,
    PageNotFoundComponent
  ],
  entryComponents: [],
  providers: [
    NavTabService
  ]
})
export class HomeModule {}
