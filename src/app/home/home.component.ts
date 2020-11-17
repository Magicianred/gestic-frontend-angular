import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';
import { User } from './_models/user';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  accountModel: User = SessionService.getUser();
  barIsCollapsed = false;
  barIsExpanding = false;
  activeNavId: string;

  constructor(private loginService: LoginService) { }


  logout() {
    this.loginService.logout();
  }

  toggleNavbar(forceValue?: boolean) {
    const newCollapsedValue = (forceValue !== undefined) ? forceValue : !this.barIsCollapsed;

    // Create delay for a smooth animation
    if (this.barIsCollapsed && !newCollapsedValue) {
      this.barIsExpanding = true;
      setTimeout(() => { this.barIsExpanding = false; }, 100);
    }
    // Remove active status
    if (newCollapsedValue) {
      this.activeNavId = null;
    }

    this.barIsCollapsed = newCollapsedValue;
  }
}
