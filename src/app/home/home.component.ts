import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';
import { User } from './_models/user';
import { LoginService } from '../_services/login.service';
import { NavTabService } from './_services/nav-tab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accountModel: User = SessionService.getUser();
  defaultRedirectUrl = SessionService.getDefaultHomePageUrl();
  barIsCollapsed = false;
  barIsExpanding = false;
  activeNavId: string;
  currTabs: {
    nestedTabName?: {}
  } = {};

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.currTabs = this.getTabsByUserType();
  }

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

  private getTabsByUserType() {
    // switch (this.accountModel.role) {
    //   case 'ADMIN': return {
    //     ordersNav: NavTabService.getNavTab('ordersNav'),
    //   };
    //   default: return null;
    // }
    return {
      nestedTabName: NavTabService.getNavTab('nestedTabName')
    }
  }
}
