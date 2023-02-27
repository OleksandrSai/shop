import { Component } from '@angular/core';
import { DataArray, AdminService, ConservationService,DataBasket, Products} from "../index"
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-basket',
  templateUrl: './admin-basket.component.html',
  styleUrls: ['./admin-basket.component.css'],
})
export class AdminBasketComponent {
  constructor(
    private serviceAdmin: AdminService,
    private serviceConserv: ConservationService,
    private bilder: FormBuilder
  ) {}

  allBasket: DataBasket[] = [];
  item: DataArray[] = [];
  howManyItems: number = 3;
  p: number = 1;
  mySorts: any;

  ngOnInit() {
    this.showAllBasket();
    this.showAllItem();
    this.form();
  }

  sum(i: number) {
    let basketTotal = this.allBasket[i].products.reduce(
      (acc: number, el: Products) =>
        (acc +=
          (this.item as DataArray[])[el.productId as number].price *
          el.quantity),
      0
    );
    return basketTotal;
  }

  showAllBasket() {
    this.serviceAdmin.takeAllBasket().subscribe((res: any) => {
      this.allBasket = res;
    });
  }
  showAllItem() {
    this.item = this.serviceConserv.DataArray;
  }

  form() {
    this.mySorts = this.bilder.group({
      before: this.bilder.control('', [
        Validators.pattern('[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}'),
        Validators.required,
      ]),
      after: this.bilder.control('', [
        Validators.pattern('[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}')
      ]),
    });
  }

  styleInput(inp: any): object {
    return {
      myValid: inp.valid && inp.dirty,
      myInvalid: inp.invalid && inp.dirty,
    };
  }

  sortBasket(value1:string, value2:string) {
    this.serviceAdmin.sortBasket(value1,value2).subscribe((res:any)=> this.allBasket = res)
  }
}
