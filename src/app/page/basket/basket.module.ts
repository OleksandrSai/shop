import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket/basket.component';
import { ModuleModule } from 'src/app/module/module.module';
import { FormsModule }   from '@angular/forms';



@NgModule({
    declarations: [
        BasketComponent
    ],
    imports: [
        CommonModule,
        BasketRoutingModule,
        ModuleModule,
        FormsModule
    ]
})
export class BasketModule { }
