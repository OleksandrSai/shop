import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBasketComponent } from './admin-panel/admin-basket/admin-basket.component';
import { AdminCardsComponent } from './admin-panel/admin-cards/admin-cards.component';
import { AdminMainComponent } from './admin-panel/admin-main/admin-main.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [

  {path: "", component:AdminPanelComponent,
children:[

  {path:"", redirectTo:"main",pathMatch:"full"},
  {path:"main",component:AdminMainComponent},
  {path:"basket",component:AdminBasketComponent},
  {path:"cards", component:AdminCardsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
