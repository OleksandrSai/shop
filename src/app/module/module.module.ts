import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { MyCurrencyHryvniaPipe } from '../Pipes/my-currency-hryvnia.pipe';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    StarsComponent,
    InputNumberComponent,
    MyCurrencyHryvniaPipe,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarsComponent,
    InputNumberComponent,
    MyCurrencyHryvniaPipe,
    FooterComponent
    ]
})
export class ModuleModule { }
