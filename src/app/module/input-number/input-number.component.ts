import { Component, Input } from '@angular/core';
import { Products, BasketService } from '../index';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
})
export class InputNumberComponent {
  constructor(private basketService: BasketService) {}

  basketData: any;
  ngOnInit() {
    this.takeBasket();
  }
  takeBasket() {
    this.basketData = this.basketService.giveBasket();
  }
  returnBasket() {
    this.basketService.takeBasket(this.basketData);
  }

  @Input('takes') takes: number | undefined;
  @Input('first') first: number | undefined;
  @Input('second') second: number | undefined;
  @Input('userId') id: number | undefined;
  @Input('products') products: Products | undefined;
  @Input('idBasket') idBasket: number | undefined;

  plus() {
    //this is for visualization on the site
    if ((this.takes as number) < 99)
      this.basketData[this.first as number].products[
        this.second as number
      ].quantity = (this.takes as number) + 1;

    // this is for sending to the server
    (this.products as Products).quantity = (this.takes as number) + 1;

    this.basketService
      .updateCarts(this.idBasket as number, this.products as Products)
      .subscribe((x: any) =>
        console.log('На сервері відбулась зміна данних ', x)
      );
    this.returnBasket();
  }

  minus() {
    if ((this.takes as number) > 0) {
      this.basketData[this.first as number].products[
        this.second as number
      ].quantity = (this.takes as number) - 1;

      (this.products as Products).quantity = (this.takes as number) - 1;

      this.basketService
        .updateCarts(this.idBasket as number, this.products as Products)
        .subscribe((x: any) =>
          console.log('На сервері відбулась зміна данних ', x)
        );
      this.returnBasket();
    }
  }

  deleteProduct() {
    let minusDelProduct = this.basketData[this.first as number].products.filter(
      (elem: any, id: number) => id !== this.second
    );
    this.basketData[this.first as number].products = minusDelProduct;
    this.returnBasket();
  }
}
