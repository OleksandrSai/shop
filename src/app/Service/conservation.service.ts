import { Injectable } from '@angular/core';
import { DataArray } from '../index';

@Injectable({
  providedIn: 'root',
})
export class ConservationService {
  constructor() {}

  DataArray: DataArray[] | undefined;

  SaveArray(item: DataArray[]) {
    this.DataArray = item;
  }
}
