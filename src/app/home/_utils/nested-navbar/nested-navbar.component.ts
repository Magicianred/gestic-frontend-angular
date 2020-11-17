import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';

interface NestedTab {
  name: string;
  value: string;
  iconCode: string;
}
interface CustomSidebar {
  id: string;
  parentTab: NestedTab;
  childTabs: NestedTab[];
}

@Component({
  selector: 'nested-navbar-component',
  templateUrl: './nested-navbar.component.html',
  styleUrls: ['./nested-navbar.component.scss']
})

export class NestedNavbarComponent implements OnInit {
  @Input() sideBarOpts: CustomSidebar;
  @Input() activeNav: any;
  @Input() barIsCollapsed: any;
  @Output() activeNavChange = new EventEmitter<string>();

  router: Router;
  availableTabs: string[] = [];
  highlightParent: boolean;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {
    // Creating array of available tabs
    this.availableTabs = this.sideBarOpts.childTabs.map(tab => tab.value);
    this.router.events.subscribe((nav) => {
      if (nav instanceof NavigationEnd) {
        this.updateNavigationSettings(nav.url);
      }
    });
    setTimeout(() => this.updateNavigationSettings(this.router.url));
  }

  private updateNavigationSettings(pathUrl) {
    this.activeNav = '';
    // Setting the parent-tab status as active
    this.highlightParent = (this.availableTabs.indexOf(pathUrl) !== -1);
    // Opening side-bar nav if parent is active and it's not collapsed
    if (this.highlightParent && !this.barIsCollapsed) {
      this.activeNav = this.sideBarOpts.parentTab.value;
      this.activeNavChange.emit(this.activeNav); // Updating nav status on parent component
    }
  }

  toggleNavStatusActiveNav() {
    // Setting active tab as parent's tab value
    this.activeNav = (this.activeNav === this.sideBarOpts.parentTab.value) ? '' : this.sideBarOpts.parentTab.value;
    this.activeNavChange.emit(this.activeNav); // Updating nav status on parent component
  }

}
