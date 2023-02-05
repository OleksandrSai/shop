import { HtmlParser } from '@angular/compiler';
import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { debounce, debounceTime, fromEvent, map, Observable, switchMap } from 'rxjs';
import { ServiceHTTPService } from '..';
map
fromEvent

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private service: ServiceHTTPService){}

  activeSearch:string = ""

  text:any

  @ViewChild("myInput") myInput:ElementRef | undefined;

  ngAfterViewInit(){
    this.text = fromEvent((this.myInput as ElementRef).nativeElement, 'input')
    this.GiveElement()

  }

  GiveElement(){
    this.service.TakeInput(this.text)
  }
}
