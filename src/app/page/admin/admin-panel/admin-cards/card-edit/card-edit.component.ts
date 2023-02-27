import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DataArray, AdminService, ConservationService} from "../../index";


@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {

 constructor(private serviceAdmin:AdminService,
  private serviceConservation:ConservationService){}
 card:DataArray[] | undefined;
 updateCard:DataArray[] = [];

 @Output()
 successfulEdit: EventEmitter<boolean> = new EventEmitter

 ngOnInit(){
  this.card = []
  this.card = this.serviceAdmin.giveEditCard()

 }

 editThisCard(id:number, title:string, img:string, price:number, category:string, description:string){

  this.serviceAdmin.updateProduct(id, title, price, description, img, category).subscribe((res:any)=>{
    this.updateCard = res
    this.serviceConservation.takeAllCards().forEach((elem:DataArray)=> {
      if(elem.id == res.id){
      elem.title = title;
      elem.price = price;
      elem.image = img;
      elem.category = category;
      elem.description = description;
      }
    })
    this.successfulEdit.emit(false)
  })

 }

}
