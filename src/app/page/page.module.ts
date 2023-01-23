import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page.component';


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
