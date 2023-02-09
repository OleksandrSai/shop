import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRoutingModule, PageComponent, HeaderComponent } from "./index";
import { SearchComponent } from './header/search/search.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    PageComponent,
    SearchComponent,

  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PageComponent
  ]
})
export class PageModule { }
