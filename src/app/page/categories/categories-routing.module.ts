import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleModule } from 'src/app/module/module.module';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { SoloCategoryComponent } from './solo-category/solo-category.component';

const routes: Routes = [
  {path: "", component:AllCategoriesComponent},
  {path: ":title", component:SoloCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ModuleModule],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
