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
  this.fillingСards();
  }

  fillingСards(){
    this.server.Getdata().subscribe((res:any)=> {
      this.Cards = res;
      this.conservation.SaveArray(this.Cards as DataArray[])
      })
  }




}
