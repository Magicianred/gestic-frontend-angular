import { Component, Input } from '@angular/core';

@Component({
  selector: 'clp-page-header',
  template: '<main>{{pageTitle}}</main>',
  styles: [`      
    main {
      height: 50px;
      background-color: #f0f1f3;
      padding: 12px 22px;
      font-weight: 300;
      font-size: 22px;
      line-height: 1;
      align-items: center;
      display: flex;
    }   
  `]
})
export class PageHeaderComponent {
  @Input() pageTitle: string;
  constructor() {}
}
