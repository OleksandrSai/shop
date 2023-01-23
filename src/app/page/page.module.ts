import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page.component';
import {PageRoutingModule, HeaderComponent, PageComponent} from "./index"


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
