import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {AutorizationComponent, FilterComponent, CardsComponent} from "./index"
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizedComponent } from './authorized/authorized.component';


@NgModule({
  declarations: [
    CardsComponent,
    FilterComponent,
    AutorizationComponent,
    AuthorizedComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    FilterComponent,
    AutorizationComponent,
    FilterComponent
  ]
})
export class MainModule { }
