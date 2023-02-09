import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { SoloCategoryComponent } from './solo-category/solo-category.component';
import { ModuleModule } from 'src/app/module/module.module';



@NgModule({
  declarations: [
    AllCategoriesComponent,
    SoloCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ModuleModule
  ]
})
export class CategoriesModule { }
