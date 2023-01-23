import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ServiceHTTPService {

  constructor(private http:HttpClient) { }

  Getdata(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}
