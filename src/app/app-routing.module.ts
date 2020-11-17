import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/auth-guard.service';

const routesConfig = { enableTracing: false, useHash: false};
const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  // { path: 'home', loadChildren: './home/home.module#HomeModule', canLoad: [AuthGuard] },
  { path: '**',   redirectTo: 'login', pathMatch: 'full' }, // otherwise redirect to login page
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, routesConfig) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
