import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleImgDirective } from './scale-img.directive';
import { SelectcardDirective } from './selectcard.directive';



@NgModule({
  declarations: [
    ScaleImgDirective,
    SelectcardDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScaleImgDirective,
    SelectcardDirective
  ]
})
export class DirectiveModule { }
