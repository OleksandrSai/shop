import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataArray } from 'src/app/Interface/MyInterface';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

constructor(private activatedRoute:ActivatedRoute,
  private serviceProduct: ProductService){}

product:DataArray[] | undefined;
nameParam:string | undefined;

ngOnInit(){
  this.getParam()
  this.getProduct()
}

getParam(){
  this.activatedRoute.params.subscribe((param:any)=> {
    this.nameParam = param['title']
  })
}
getProduct(){
  this.serviceProduct.getProduct((this.nameParam as string)).subscribe((res:any)=> this.product = res)
}


}
