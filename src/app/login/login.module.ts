import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    FormsModule,
    NgbModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule {}
