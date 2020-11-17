import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    LoginModule,
    HomeModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      progressBar: true,
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
