import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from './list-cards.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    ListCardsComponent
  ],
  exports: [
    ListCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule
  ]
})
export class ListCardsModule { }
