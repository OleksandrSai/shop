import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, filter, map, switchMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories").pipe(
      switchMap((x:any) => x),
      map((x:any)=> {
        return {
          title: x,
          image: `assets/${x}.png`
        }}),
        toArray()
    )
  }
  getCategory(text:string){
    return this.http.get("https://fakestoreapi.com/products").pipe(
      switchMap((res:any)=> res),
      filter((res:any)=> res.category == text),
      toArray()
    )
  }




}
