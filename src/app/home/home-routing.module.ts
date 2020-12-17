import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
// import { RoleGuard } from './_services/role-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './users/profile/profile.component';
import { PageNotFoundComponent } from './_utils/not-found.component';
import { UsersComponent } from './users/users.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { ProjectDetailsComponent } from './active-projects/project-details/project-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';


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
      path: 'bulletin-board',
      component: BulletinBoardComponent,
    },
    {
      path: 'active-projects',
      component: ActiveProjectsComponent,
    },
    {
      path: 'active-projects/:projectId',
      component: ProjectDetailsComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'user-register',
      component: UserRegisterComponent,
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
