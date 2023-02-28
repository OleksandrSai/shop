import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {DataArray, SearchService} from "../index"


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor(private serviceSearch:SearchService,
     private router:Router){}

  serchArray:DataArray[] | undefined;

  nothingFound:boolean = false;

  subscription:Subscription | undefined;


  @Input('inInput') inInput:string = ""

  ngOnInit(){
    this.needSeacrh()
  }

  needSeacrh(){
   this.subscription = this.serviceSearch.GetDataTitle().subscribe(((res:any)=> {
         this.serchArray = res;
         if(this.serchArray?.length === 0)this.nothingFound = true;
         else this.nothingFound = false;
        }))
  }

  toProduct(card:DataArray){
    this.router.navigate(['product', card.title])
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }







}

