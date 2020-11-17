import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from '../_services/auth-interceptor.service';
import { TextPlaceholderPipe } from './_pipes/text-placeholder.pipe';
import { PageHeaderComponent } from './_utils/page-header.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    TextPlaceholderPipe,
    PageHeaderComponent
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
    PageHeaderComponent
  ]
})
export class SharedModule {}
