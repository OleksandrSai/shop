import { HtmlParser } from '@angular/compiler';
import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { debounce, debounceTime, fromEvent, map, Observable, switchMap } from 'rxjs';
import { SearchService } from '../../Service/search.service';
map
fromEvent

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private serviceSearch: SearchService){}

  activeSearch:string = ""

  input:any

  @ViewChild("myInput") myInput:ElementRef | undefined;


  ngAfterViewInit(){
    this.input = fromEvent((this.myInput as ElementRef).nativeElement, 'input')
    this.GiveInput()
  }

  GiveInput(){
    this.serviceSearch.TakeInput(this.input)
  }
}
