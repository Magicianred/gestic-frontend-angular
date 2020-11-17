import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../_services/auth-guard.service';
import { LoginService }         from '../_services/login.service';
import { LoginComponent }       from './login.component';


const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    LoginService
  ]
})
export class LoginRoutingModule {}
