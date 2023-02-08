import { Injectable } from '@angular/core';
import {
  map,
  debounceTime,
  switchMap,
  filter,
  take,
  toArray,
} from 'rxjs/operators';
import { ServiceHTTPService } from './service-http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  element: any;

  constructor(private serviceHTTP: ServiceHTTPService) {}

  TakeInput(elem: any) {
    this.element = elem;
  }

  GetDataTitle() {
    return this.element.pipe(
      map((x: any) => (x.target as HTMLInputElement).value),
      debounceTime(1000),
      switchMap((event: string) => {
        return this.serviceHTTP.Getdata().pipe(
          switchMap((res: any) => res),
          filter((word: any) => {
            if (word.title.toLowerCase().includes((event as string).toLocaleLowerCase())) {
              return word;
            }
          }),
          take(6),
          toArray()
        );
      })
    );
  }
}
