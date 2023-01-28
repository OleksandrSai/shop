import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {AutorizationComponent, FilterComponent, CardsComponent} from "./index"


@NgModule({
  declarations: [
    CardsComponent,
    FilterComponent,
    AutorizationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports:[
    FilterComponent,
    AutorizationComponent,
    FilterComponent
  ]
})
export class MainModule { }
