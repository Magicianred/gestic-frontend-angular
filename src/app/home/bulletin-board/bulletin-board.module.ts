import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinBoardComponent } from './bulletin-board.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [BulletinBoardComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BulletinBoardModule { }
