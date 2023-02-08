import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './product/stars/stars.component';


@NgModule({
  declarations: [
    ProductComponent,
    StarsComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
