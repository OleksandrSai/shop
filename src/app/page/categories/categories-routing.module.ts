import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { SoloCategoryComponent } from './solo-category/solo-category.component';

const routes: Routes = [
  {path: "", component:AllCategoriesComponent},
  {path: ":title", component:SoloCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
