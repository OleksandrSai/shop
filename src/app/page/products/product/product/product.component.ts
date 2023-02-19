import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataArray, Products } from 'src/app/Interface/MyInterface';
import { AuthService } from 'src/app/Service/auth.service';
import { BasketService } from 'src/app/Service/basket.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceProduct: ProductService,
    private basketService: BasketService,
    private authService: AuthService
  ) {}

  product: DataArray[] | undefined;
  nameParam: string | undefined;
  productID: number | undefined;
  quantity: number = 1;
  flag: boolean = false;
  exam: boolean = true;
  countClick: number = 1;

  ngOnInit() {
    this.getParam();
    this.getProduct();
    this.takeProductID();
    this.generateObj();
  }
  ngDoCheck() {
    if (this.authService.authToken) this.flag = true;
  }

  takeProductID() {
    this.product?.forEach((elem: DataArray) => (this.productID = elem.id));
  }

  getParam() {
    this.activatedRoute.params.subscribe((param: any) => {
      this.nameParam = param['title'];
    });
  }
  getProduct() {
    this.serviceProduct
      .getProduct(this.nameParam as string)
      .subscribe((res: any) => {
        this.product = res;
        this.takeProductID();
      });
  }

  funcExmination() {
    this.exam = this.basketService.giveBasket()
    .some((element) => element.date == this.authService.todayDate());
  }

  generateObj() {
    let obj: Products = {
      productId: (this.productID as number) - 1,
      quantity: this.quantity,
    };
    return obj;
  }

  buyProduct() {
    if (this.flag) {
      this.basketService.addNewCard(this.generateObj()).subscribe((x: any) => {
        this.funcExmination();
        if (!this.exam) this.basketService.giveBasket().push(x);
      });
    }

    if (this.exam) {
      this.basketService.giveBasket()
        .filter((element) => element.date == this.authService.todayDate())
        .filter((elem) =>
          elem.products.forEach((el) => {

            if (el.productId == this.generateObj().productId) {
              el.quantity += 1;}

            else if (this.countClick == 1) {
              this.countClick++;
              elem.products.push(this.generateObj());
            }
          })
        );
    }
  }
}
