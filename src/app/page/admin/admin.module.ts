import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCardsComponent } from './admin-panel/admin-cards/admin-cards.component';
import { AdminBasketComponent } from './admin-panel/admin-basket/admin-basket.component';
import { ModuleModule } from 'src/app/module/module.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminMainComponent } from './admin-panel/admin-main/admin-main.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CardEditComponent } from './admin-panel/admin-cards/card-edit/card-edit.component';
import { CardAddComponent } from './admin-panel/admin-cards/card-add/card-add.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminCardsComponent,
    AdminBasketComponent,
    AdminMainComponent,
    CardEditComponent,
    CardAddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModuleModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
