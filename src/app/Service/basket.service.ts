import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Users } from '../page';
import { DataBasket, Products } from '../page';
import { debounceTime, delay, first, map, mergeMap, take, tap, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  UserId: number | undefined;
  num: any;
  dataUserBasket: DataBasket[] = [];
  totalProduct:number | undefined;
  totalPrice:number | undefined;

  calculateTotalProduct(){
    try{
      let quantity:number[] = []
      this.dataUserBasket?.forEach((el)=> el.products.forEach(elem=> quantity.push(elem.quantity)))
      this.totalProduct = quantity.reduce((acc:number, el:number)=> acc += el)
    }
    catch{
      console.log("Помилка. Кошики пусті - не можливо порахувати")
      this.totalProduct = 0
    }
  }

  giveTotal(){
    return this.totalProduct;
  }

  takeBasket(basket: any) {
    this.dataUserBasket = basket;
  }

  giveBasket() {
    return this.dataUserBasket;
  }

  updateCarts(idBasket:number, product:Products){
    return this.http.patch(`https://fakestoreapi.com/carts/${idBasket}`,
    {userId: this.UserId,
    date: this.auth.todayDate(),
    products:[product]}).pipe(
      delay(650)
    )
  }

  addNewCard(Myproduct:Products){
   return this.http.post("https://fakestoreapi.com/carts",
    {userId: this.UserId,
    date: this.auth.todayDate(),
    products:[Myproduct]}).pipe(
      take(1)
    )
  }


}
