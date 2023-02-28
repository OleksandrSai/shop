import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ConservationService, AdminService, AuthService, DataArray, DataBasket, Products } from "../index"

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit, OnDestroy {
  totalPrice: number | undefined;
  allBasket: DataBasket[] = [];
  item: DataArray[] = [];
  countBasket:number = this.allBasket.length;
  countItems:number | undefined;
  countUsers:number | undefined;
  subscription:Subscription | undefined;


  constructor(
    private serviceAdmin: AdminService,
    private serviceConserv: ConservationService,
    private serviceAuth:AuthService) {}

  ngOnInit() {
    this.showAllBasket();
    this.showAllItem();
    this.countItems = this.item.length;
    this.countUsers = this.serviceAuth.giveAllUsers()?.length
  }

  calculateTotalPrice() {
    let total: number = 0;
    this.allBasket.forEach((elem: DataBasket) =>
      elem.products.forEach((el: Products) =>
      (total += el.quantity * this.item[el.productId as number].price)));
    this.totalPrice = total;
  }

  showAllBasket() {
    this.subscription = this.serviceAdmin.takeAllBasket().subscribe((res: any) => {
      this.allBasket = res;
      this.calculateTotalPrice();
      this.countBasket = this.allBasket.length
    });
  }

  showAllItem() {
    this.item = this.serviceConserv.DataArray;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
