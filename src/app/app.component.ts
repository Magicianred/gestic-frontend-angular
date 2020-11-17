import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-component">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`.app-component { height: 100%; }`]
})

export class AppComponent {}
