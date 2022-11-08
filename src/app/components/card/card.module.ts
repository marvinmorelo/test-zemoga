import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { TruncateTextModule } from 'src/app/pipes/truncate-text/truncate-text.module';
import { ListTypeImageModule } from '../../pipes/list-type-image/list-type-image.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    TruncateTextModule,
    ListTypeImageModule
  ]
})
export class CardModule { }
