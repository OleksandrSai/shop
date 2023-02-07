import { Component, OnInit } from '@angular/core';
import {DataArray, ServiceHTTPService, ConservationService} from "../../index"

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private server:ServiceHTTPService,
    private conservation:ConservationService){}

  Cards:DataArray[] | undefined;

  ngOnInit(){
    this.cashCart()
  }

  ngDoCheck(){
    this.checkSort()
    this.sortCards()
  }

  fillingСards(){
    if(!this.Cards){
    this.server.Getdata().subscribe((res:any)=> {
      this.Cards = res;
      this.conservation.SaveArray(this.Cards as DataArray[])
      })
    }
  }

  sortCards(){
    switch (this.conservation.sortPrice) {
      case "all":
        let all:DataArray[] | undefined;
        all = this.Cards?.sort((a,b)=> a.id - b.id)
        this.Cards = (all as DataArray[])
        break;
      case  "max":
        let max:DataArray[] | undefined;
        max = this.Cards?.sort((a,b)=> b.price - a.price)
        this.Cards = (max as DataArray[])
        break;
       case  "min":
        let min:DataArray[] | undefined;
        min = this.Cards?.sort((a,b)=> a.price - b.price)
        this.Cards = (min as DataArray[])
        break;
    }
  }

  checkSort(){
    if(this.conservation.selectedArray) this.Cards = this.conservation.selectedArray;
    if(!this.conservation.selectedArray?.length) this.Cards = this.conservation.DataArray;
  }

  cashCart(){
    if(!this.conservation.DataArray) this.fillingСards();
    if(this.conservation.DataArray == undefined){
      this.Cards = this.conservation.DataArray
    }
  }

  toProduct(){
    console.log("ddd")
  }




}
