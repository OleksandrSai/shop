import { Injectable } from '@angular/core';
import { DataArray } from '../index';

@Injectable({
  providedIn: 'root',
})
export class ConservationService {
  constructor() {}

  DataArray: DataArray[] = []

  selectedArray:DataArray[] = []

  sortPrice:string | undefined;

  SaveArray(item: DataArray[]) {
    this.DataArray = item;
    console.log(this.DataArray)
  }

  FindNeed(name:string[]){
    this.selectedArray = []
    name.forEach((name:string)=> (this.DataArray as DataArray[]).filter((elem)=> {
      if(elem.category == name){
        (this.selectedArray as DataArray[]).push(elem)
      }}))
  }

}
