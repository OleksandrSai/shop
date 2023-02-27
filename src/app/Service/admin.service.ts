import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, throwError } from 'rxjs';
import { DataArray } from '../page';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  card:DataArray[] = [];

  constructor(private http: HttpClient) { }

  takeAllBasket(){
    return this.http.get('https://fakestoreapi.com/carts')
  }

  sortBasket(value1:string, value2:string){
    return this.http.get(`https://fakestoreapi.com/carts/startdate=${value1}&enddate=${value2}`)
  }

  delProduct(id:number){
    return this.http.delete(`https://fakestoreapi.com/products/${id}`).pipe(
     map((el:any)=>el.id))
  }

  updateProduct(id:number, title:string, price:number, description:string, image:string, category:string){
    return this.http.put(`https://fakestoreapi.com/products/${id}`,
    {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category
  })
}

newProduct(title:string, price:number, description:string, image:string, category:string){
return this.http.post("https://fakestoreapi.com/products",
{
  title: title,
  price: price,
  description: description,
  image: image,
  category: category
} )
}
takeEditCard(id:number){
  this.card = []
  this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe((res:any) =>  this.card.push(res))
}
giveEditCard(){
  return this.card;
}





}
