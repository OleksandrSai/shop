import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, Unsubscribable } from 'rxjs';
import { ServiceHTTPService } from '../..';
import { DataArray } from '../..';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: ServiceHTTPService){}

  @Input('inInput') inInput:string = ""

  serchArray:DataArray[] | undefined;
  subscription:any;

  ngOnInit(){
    this.needSeacrh()
  }



  needSeacrh(){
      this.subscription = this.service.GetDataTitle().subscribe(((res:any)=> this.serchArray = res),
      ((err:any)=> console.log(err))),
      ((comp:any)=> console.log("ddd"))

  }







}

