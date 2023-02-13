import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Users } from '../page';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http:HttpClient,
    private auth: AuthService) { }

    UserId:number | undefined;


   userBasket(){
    return this.http.get(`https://fakestoreapi.com/carts/user/${this.UserId}`)
   }

   takeUserIdBasket(id:Users[]){
  id.forEach((x:any)=> this.UserId = x.id)



   }
takePage(){
  return this.http.get("https://fakestoreapi.com/products").pipe(
    map((x:any)=>(x as []).length / 6)
  )
}

}
