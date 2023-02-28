import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataArray } from 'src/app/Interface/MyInterface';
import { AdminService } from 'src/app/Service/admin.service';
import { ConservationService } from 'src/app/Service/conservation.service';


@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnDestroy{

  constructor(private serviceAdmin:AdminService,
    private serviceConservation:ConservationService){}

   card:DataArray[] | undefined;
   updateCard:DataArray[] = [];
   subscription:Subscription | undefined;

   @Output()
   successAdd: EventEmitter<boolean> = new EventEmitter

   addNewProduct(title:string, img:string, price:number, category:string, description:string){
   this.subscription = this.serviceAdmin.newProduct(title, price, description, img, category).subscribe((res:any)=>{
      this.updateCard = res
      this.serviceConservation.takeAllCards().push(res)
      console.log(this.serviceConservation.takeAllCards())
      this.successAdd.emit(false)})
   }

   ngOnDestroy(): void {
     this.subscription?.unsubscribe()
   }

}
