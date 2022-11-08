import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShowcaseModule } from 'src/app/components/showcase/showcase.module';
import { ListCardsModule } from 'src/app/components/list-cards/list-cards.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShowcaseModule,
    ListCardsModule
  ]
})
export class HomeModule { }
