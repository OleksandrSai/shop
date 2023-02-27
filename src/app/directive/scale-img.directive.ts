import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ScaleImg]'
})
export class ScaleImgDirective {

  constructor(private render:Renderer2, private elementRef:ElementRef) { }

  @HostListener("mouseenter") mouseEnter(){
    this.scaleImg("scale(1.4)")
  }
  @HostListener("mouseout") mouseMove(){
    this.scaleImg("scale(1)")
  }
  scaleImg(scale:string){
this.render.setStyle(this.elementRef.nativeElement, "transform", scale)
  }

}
