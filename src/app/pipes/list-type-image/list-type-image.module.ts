import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTypeImagePipe } from './list-type-image.pipe';



@NgModule({
  declarations: [
    ListTypeImagePipe
  ],
  exports: [
    ListTypeImagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class ListTypeImageModule { }
