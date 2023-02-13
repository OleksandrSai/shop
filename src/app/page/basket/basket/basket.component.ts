import { Component } from '@angular/core';
import { BasketService } from 'src/app/Service/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  constructor(private ServiceBasket: BasketService){}

  products: number | undefined;
  user:any
  page:number[] | undefined;


  ngOnInit(){
    this.ServiceBasket.takePage().subscribe((x:any)=> this.products = x)
  }

  NumberPage(){
    for(let i= 1; i<=(this.products as number), i++;){
      this.page?.push(i)
    }
  }


}
