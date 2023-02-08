import { Injectable } from '@angular/core';
import { filter, switchMap, toArray } from 'rxjs';
import { ServiceHTTPService } from './service-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private serviceHTTP: ServiceHTTPService) {}

  getProduct(title:string){
    return this.serviceHTTP.Getdata().pipe(
    switchMap((x:any)=> x),
    filter((x:any) => x.title === title),
    toArray()
  )
  }


}
