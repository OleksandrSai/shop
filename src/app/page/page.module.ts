import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRoutingModule, PageComponent, HeaderComponent } from "./index"


@NgModule({
  declarations: [
    HeaderComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports:[
    PageComponent
  ]
})
export class PageModule { }
