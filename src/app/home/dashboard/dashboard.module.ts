import { NgModule }       from '@angular/core';
import { SharedModule } from '../shared.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
