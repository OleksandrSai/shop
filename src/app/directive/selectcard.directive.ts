import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Selectcard]'
})
export class SelectcardDirective {

  constructor(private render:Renderer2, private elementRef:ElementRef) { }

  @HostListener("mouseover") mouseEnter(){
    this.scaleImg("2px solid green")
  }
  @HostListener("mouseout") mouseMove(){
    this.scaleImg("2px solid skyblue")
  }
  scaleImg(scale:string){
this.render.setStyle(this.elementRef.nativeElement, "border", scale)
  }

}
