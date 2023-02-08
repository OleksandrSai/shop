import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: ()=> import("./main/main.module").then(mod=>mod.MainModule)},
  {path: "product", loadChildren: ()=> import("./products/product/product.module").then(mod=> mod.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
