import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';
import { User } from './_models/user';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accountModel: User = SessionService.getUser();
  defaultRedirectUrl = SessionService.getDefaultHomePageUrl();

  constructor(private loginService: LoginService) { }

  logout() {
    this.loginService.logout();
  }

  ngOnInit() {}

}
