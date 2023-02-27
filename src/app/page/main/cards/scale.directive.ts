import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {


  constructor(public render:Renderer2, public elementRef:ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    this.scaleImage("red")
  }
  @HostListener("mousemove") onMouseMove(){
    this.scaleImage("green")
  }

  private scaleImage(scale:string){
    this.render.setStyle(this.elementRef.nativeElement, "color", scale)

}
}
