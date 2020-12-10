import { Component, Input } from '@angular/core';
import { SessionService } from '../../_services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'clp-page-header',
  template: `
    <main (click)="goBackToUrl()">
      <i class="material-icons">arrow_back</i>
      {{pageTitle}}
    </main>
  `,
  styles: [`      
    main {
      display: flex;
      height: 50px;
      background-color: #f0f1f3;
      padding: 10px;
      font-size: 18px;
      line-height: 1;
      align-items: center;
    }
    .material-icons {
      font-size: 20px;
      margin-right: 10px;
    }
  `]
})
export class PageHeaderComponent {
  @Input() pageTitle: string;
  @Input() backButtonUrl?: string;

  constructor(private router: Router) {}

  goBackToUrl(): void {
    this.router.navigate([ this.backButtonUrl || SessionService.getDefaultHomePageUrl() ]);
  }
}
