import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRoutingModule, PageComponent, HeaderComponent } from "./index";
import { SearchComponent } from './header/search/search.component'


@NgModule({
  declarations: [
    HeaderComponent,
    PageComponent,
    SearchComponent,
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
