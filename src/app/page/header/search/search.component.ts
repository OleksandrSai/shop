import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber, Unsubscribable } from 'rxjs';
import { SearchService } from 'src/app/Service/search.service';
import { DataArray } from '../..';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private serviceSearch:SearchService,
     private router:Router){}

  serchArray:DataArray[] | undefined;

  nothingFound:boolean = false;


  @Input('inInput') inInput:string = ""

  ngOnInit(){
    this.needSeacrh()
  }

  needSeacrh(){
    this.serviceSearch.GetDataTitle().subscribe(((res:any)=> {
         this.serchArray = res;
         if(this.serchArray?.length === 0)this.nothingFound = true;
         else this.nothingFound = false;
        }))
  }
  toProduct(card:DataArray){
    this.router.navigate(['product', card.title])
  }







}

