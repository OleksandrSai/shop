import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Grn'
})
export class MyCurrencyHryvniaPipe implements PipeTransform {

  transform(value: string | number | null, ...args: unknown[]): string {
    if(value) {
      return value + " " + "грн"
    }
    else{
      return "";
    }
  }

}
