import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {DataArray,CategoriesService  } from "../index"


@Component({
  selector: 'app-solo-category',
  templateUrl: './solo-category.component.html',
  styleUrls: ['./solo-category.component.css']
})
export class SoloCategoryComponent implements OnInit, OnDestroy {

  constructor(private router:Router,
    private ServiveProduct: CategoriesService,
    private activatedRoute:ActivatedRoute){}

  cards:DataArray[] | undefined;
  thisWay:string | undefined;
  subscription:Subscription | undefined;

  ngOnInit(){
    this.whatWay()
    this.TakeProduct()
  }

  toProduct(card:DataArray){
    this.router.navigate(['product', card.title])
  }

  whatWay(){
    this.activatedRoute.params.forEach((way:any)=> this.thisWay = way['title'])
  }

  TakeProduct(){
    this.subscription = this.ServiveProduct.getCategory((this.thisWay as string)).subscribe((res:any)=> this.cards = res)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
