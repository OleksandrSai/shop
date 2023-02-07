import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
     ){}
  subscription:Subscriber<any> | undefined

  serchArray:DataArray[] | undefined;

  nothingFound:boolean = false;


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







}

