import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {AutorizationComponent, FilterComponent, CardsComponent} from "./index"
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizedComponent } from './authorized/authorized.component';
import { ModuleModule } from 'src/app/module/module.module';
import {NgxPaginationModule} from 'ngx-pagination'
import { DirectiveModule } from 'src/app/directive/directive.module';


@NgModule({
  declarations: [
    CardsComponent,
    FilterComponent,
    AutorizationComponent,
    AuthorizedComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    ModuleModule,
    NgxPaginationModule,
    DirectiveModule
  ],
  exports:[
  ]
})
export class MainModule { }
