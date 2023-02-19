import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BasketService } from 'src/app/Service/basket.service';
import { ConservationService } from '../..';
import { DataArray, DataBasket } from '../../../Interface/MyInterface';

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

  ngOnInit() {
    this.basket = this.ServiceBasket.giveBasket();
    this.item = this.conservation.putInBasket();
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

  @ViewChildren('price') price: QueryList<any> | undefined;

  calculateTotalPrice() {
    this.totalPrice = (this.price as QueryList<any>).reduce(
      (acc: number, el:ElementRef) => (acc +=(parseFloat(el.nativeElement.innerHTML))),0);
    this.cdr.detectChanges()
  }




}
