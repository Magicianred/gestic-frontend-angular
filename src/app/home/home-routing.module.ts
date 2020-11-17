import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_services/auth-guard.service';
import { HomeComponent } from './home.component';
// import { RoleGuard } from './_services/role-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './users/profile/profile.component';
import { PageNotFoundComponent } from './_utils/not-found.component';
import { UsersComponent } from './users/users.component';


const homeRoutes: Routes = [{
  path: 'home',
  component: HomeComponent,
  // canActivate: [AuthGuard],
  // canActivateChild: [AuthGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    // otherwise redirect to page-not-found
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // RoleGuard
  ]
})
export class HomeRoutingModule {}
