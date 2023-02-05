import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter} from 'rxjs';
import {
  scan,
  switchMap,
  take,
  map,
  debounceTime,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceHTTPService {

  element: any;

  constructor(private http: HttpClient) {}

  Getdata() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  TakeInput(elem: any) {
    this.element = elem;
  }

  GetDataTitle() {
    return this.element.pipe(
      map((x: any) => (x.target as HTMLInputElement).value),
      debounceTime(1000),
      switchMap((event: string) => {
        return this.Getdata().pipe(
          switchMap((res: any) => res),
          filter((word: any) => {
            if (word.title.toLowerCase().includes((event as string).toLocaleLowerCase()))
            {
              return word;
            }}),
          take(6),
          scan((acc: any, value) => [...acc, value], []));}));
        }


}
