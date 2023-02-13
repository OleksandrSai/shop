import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PaginationComponent } from './first-page/pagination/pagination.component';




@NgModule({
  declarations: [
    StarsComponent,
    FirstPageComponent,
    PaginationComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarsComponent,
    ]
})
export class ModuleModule { }
