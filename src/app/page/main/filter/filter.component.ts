import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ConservationService } from '../..';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  constructor(private conservation: ConservationService) {}

  @ViewChildren('filter') filtres: QueryList<ElementRef> | undefined;

  ngOnInit() {}

  FindCart() {
    let array: string[] = [];
    (this.filtres as QueryList<ElementRef>).forEach((elem) => {
      if (elem.nativeElement.checked) {
        array.push(elem.nativeElement.value);
      }});
    this.conservation.FindNeed(array);
  }

  sort(value: string) {
    this.conservation.sortPrice = value;
  }
}
