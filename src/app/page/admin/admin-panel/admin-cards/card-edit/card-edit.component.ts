import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataArray, AdminService, ConservationService } from '../../index';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css'],
})
export class CardEditComponent implements OnInit, OnDestroy{
  constructor(
    private serviceAdmin: AdminService,
    private serviceConservation: ConservationService) {}

  card: DataArray[] | undefined;
  updateCard: DataArray[] = [];
  subscription: Subscription | undefined;

  @Output()
  successfulEdit: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    this.card = [];
    this.card = this.serviceAdmin.giveEditCard();
  }

  editThisCard(id: number, title: string, img: string, price: number, category: string, description: string) {
    this.subscription = this.serviceAdmin
      .updateProduct(id, title, price, description, img, category)
      .subscribe((res: any) => { this.updateCard = res;
        this.serviceConservation.takeAllCards().forEach((elem: DataArray) => {
          if (elem.id == res.id) {
            elem.title = title;
            elem.price = price;
            elem.image = img;
            elem.category = category;
            elem.description = description;
          }});
        this.successfulEdit.emit(false);
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
