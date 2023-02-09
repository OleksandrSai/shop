import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Service/categories.service';
import { DataArray } from '../../main';


@Component({
  selector: 'app-solo-category',
  templateUrl: './solo-category.component.html',
  styleUrls: ['./solo-category.component.css']
})
export class SoloCategoryComponent {

  constructor(private router:Router,
    private ServiveProduct: CategoriesService,
    private activatedRoute:ActivatedRoute){}

  cards:any;
  thisWay:string | undefined;

  ngOnInit(){
    this.whatWay()
    this.TakeProduct()
    console.log(this.cards)
  }

  toProduct(card:DataArray){
    this.router.navigate(['product', card.title])
  }

  whatWay(){
    this.activatedRoute.params.forEach((way:any)=> this.thisWay = way['title'])
  }

  TakeProduct(){
    this.ServiveProduct.getCategory((this.thisWay as string)).subscribe((res:any)=> this.cards = res)
  }

}
