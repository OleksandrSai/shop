import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRoutingModule, PageComponent, HeaderComponent } from "./index";
import { SearchComponent } from './header/search/search.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleModule } from '../module/module.module';



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
    ReactiveFormsModule,
    ModuleModule
  ],
  exports:[
    PageComponent
  ]
})
export class PageModule { }
