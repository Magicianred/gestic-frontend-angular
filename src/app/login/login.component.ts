import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { LoginService }      from '../_services/login.service';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../_services/session.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormOpt: any = {};
  loadingReq = false;

  constructor(private toastr: ToastrService,
              public loginService: LoginService,
              public router: Router) { }

  login() {
    this.loadingReq = true;

    this.loginService.login(this.loginFormOpt.email, this.loginFormOpt.password)
      .subscribe(
        data => {
          if (SessionService.isUserLoggedIn()) {
            this.router.navigate([ SessionService.getDefaultHomePageUrl() ]);
          } else {
            this.toastr.error('Ocorreu um erro');
            throw new Error('User couldn\'t be stored');
          }
          this.loadingReq = false;
        },
        error => {
          this.loadingReq = false;
          if (error.status === 404) {
            this.toastr.error('Endereço de e-mail não cadastrado');
          } else if (error.status === 401) {
            this.toastr.error('E-mail ou senha incorretos');
          } else {
            this.toastr.error('Ocorreu um erro');
          }
        });
  }
}
