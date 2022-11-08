import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';



@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  exports: [
    ShowcaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShowcaseModule { }
