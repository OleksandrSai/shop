import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {BasketService, ConservationService, DataArray, DataBasket} from "../index"

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements AfterViewChecked {
  constructor(
    private ServiceBasket: BasketService,
    private conservation: ConservationService,
    private cdr:ChangeDetectorRef
  ) {}

  item: DataArray[] = [];
  basket: DataBasket[] | undefined;
  total: number | undefined;
  totalPrice: any;

  @ViewChildren('price') price: QueryList<any> | undefined;

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
    this.totalPrice = (this.price as QueryList<any>).reduce(
      (acc: number, el:ElementRef) => (acc +=(parseFloat(el.nativeElement.innerHTML))),0);
    this.cdr.detectChanges()
  }

  sum(i:any){
    let basketTotal = (this.basket as any[])[i].products.reduce(((acc:any, el:any)=> acc += this.item[el.productId].price * el.quantity),0)
    return basketTotal
  }




}
