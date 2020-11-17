import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from '../_services/auth-interceptor.service';
import { UtilitiesService } from './_services/utilities.service';
import { TextPlaceholderPipe } from './_pipes/text-placeholder.pipe';
import { LoadingCircleComponent } from './_utils/loading-circle.component';
import { LoadingBulletComponent } from './_utils/loading-bullet.component/loading-bullet.component';
import { FakerService } from './_services/faker.service';
import { PageHeaderComponent } from './_utils/page-header.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    TextPlaceholderPipe,
    LoadingCircleComponent,
    LoadingBulletComponent,
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
    UtilitiesService,
    FakerService
  ],
  exports: [
    FormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    TextPlaceholderPipe,
    LoadingCircleComponent,
    LoadingBulletComponent,
    PageHeaderComponent
  ]
})
export class SharedModule {}
