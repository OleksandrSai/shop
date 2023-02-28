import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {BasketService, ConservationService, DataArray, DataBasket, Products} from "../index"

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements AfterViewChecked, OnInit, DoCheck {
  constructor(
    private ServiceBasket: BasketService,
    private conservation: ConservationService,
    private cdr:ChangeDetectorRef
  ) {}

  item: DataArray[] = [];
  basket: DataBasket[] | undefined;
  total: number | undefined;
  totalPrice:number | undefined;

  @ViewChildren('price') price: QueryList<ElementRef> | undefined;

  ngOnInit() {
    this.basket = this.ServiceBasket.giveBasket();
    this.item = this.conservation.takeAllCards();
  }

  ngDoCheck() {
    this.basket = this.ServiceBasket.giveBasket();
    this.takeTotal();
  }

  ngAfterViewChecked() {
    this.calculateTotalPrice();
  }

  takeTotal() {
    this.total = this.ServiceBasket.giveTotal();
  }

  calculateTotalPrice() {
    this.totalPrice = (this.price as QueryList<ElementRef>).reduce(
      (acc: number, el:ElementRef) => (acc +=(parseFloat(el.nativeElement.innerHTML))),0);
    this.cdr.detectChanges()
  }

  sum(i:any){
    let basketTotal = (this.basket as DataBasket[])[i].products.reduce(((acc:any, el:Products)=> acc += this.item[el.productId].price * el.quantity),0)
    return basketTotal
  }






}
