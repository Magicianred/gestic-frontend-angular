import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from '../_services/auth-interceptor.service';
import { TextPlaceholderPipe } from './_pipes/text-placeholder.pipe';
import { PageHeaderComponent } from './_utils/page-header.component';
import { PasswordCheckDirective } from './_utils/password-check.directive';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    TextPlaceholderPipe,
    PageHeaderComponent,
    PasswordCheckDirective
  ],
  entryComponents: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  exports: [
    FormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    TextPlaceholderPipe,
    PageHeaderComponent,
    PasswordCheckDirective
  ]
})
export class SharedModule {}
