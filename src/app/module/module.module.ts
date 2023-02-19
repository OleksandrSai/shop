import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { MyCurrencyHryvniaPipe } from '../Pipes/my-currency-hryvnia.pipe';



@NgModule({
  declarations: [
    StarsComponent,
    InputNumberComponent,
    MyCurrencyHryvniaPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarsComponent,
    InputNumberComponent,
    MyCurrencyHryvniaPipe
    ]
})
export class ModuleModule { }
