import { Component } from '@angular/core';
import { SessionService } from '../../_services/session.service';
import { Router } from '@angular/router';

@Component({
  template: `
    <div>
        <clp-page-header pageTitle="404"></clp-page-header>
        <section>
            <h2>404 - Página não encontrada</h2>
            <a id="custom-link" (click)="goBack()">
                <i class="material-icons">arrow_back</i>
                Voltar para página principal
            </a>
        </section>
    </div>
  `,
  styles: [`
    section {
      margin: 40px auto;
      padding: 0 22px;
      text-align: center;
    }
    #custom-link {
      cursor: pointer;
      margin: 30px auto 0;
      display: block;
      width: 200px;
    }
    #custom-link:hover {
      text-decoration: underline;
      color: #333;
    }
    #custom-link .material-icons {
      font-size: 16px;
      vertical-align: text-bottom;
    }
    h2 {
      background-color: #c3c3c3;
      color: #FFF;
      padding: 10px 14px;
    }
  `]
})
export class PageNotFoundComponent {
  constructor(public router: Router) { }

  goBack(): void {
    this.router.navigate([ SessionService.getDefaultHomePageUrl() ]);
  }
}
