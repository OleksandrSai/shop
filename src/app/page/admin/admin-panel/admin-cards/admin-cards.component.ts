import { Component } from '@angular/core';
import {DataArray, AdminService, ConservationService} from "../index"

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent {

constructor(private serviceConservation:ConservationService,
  private serviceAdmin:AdminService){}

cards:DataArray[] = [];
p:number = 1;
howManyItems:number = 10;
flagEdit:boolean = false;
flagAdd:boolean = false;

ngOnInit(){
  this.fillCards()
}

fillCards(){
  this.cards = this.serviceConservation.takeAllCards()
}

requestDelCard(id:number){
this.serviceAdmin.delProduct(id).subscribe({
  next:(res:any) => this.delCards(res),
  error:(error) => console.log(error)
})
}

delCards(id:number){
  let newColection:DataArray[] = this.cards.filter((element:DataArray)=> element.id !== id)
  this.cards = newColection
  this.serviceConservation.SaveArray(this.cards)
}

editCard(id:number){
  this.serviceAdmin.takeEditCard(id)
  this.flagEdit = true;

}
addCard(){
  this.flagAdd = true;
}
successfulEdit(event:boolean){
  this.flagEdit = event;
}
successAdd(event:boolean){
  this.flagAdd = event;
}


}
