import { Component, ElementRef, Inject, inject, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AuthService } from '../main';
import{SearchService, BasketService} from "./index"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private serviceSearch: SearchService,
    private basketService: BasketService
  ) {}

  activeSearch: string = '';

  input: any;

  totalInBasket: number | undefined;

  flag: boolean = false;

  @ViewChild('myInput') myInput: ElementRef | undefined;

  ngAfterViewInit() {
    this.input = fromEvent((this.myInput as ElementRef).nativeElement, 'input');
    this.GiveInput();
  }

  ngDoCheck() {
    this.showTotalNumber()
  }

  showTotalNumber(){
    if (this.basketService.giveBasket().length) {
      this.basketService.calculateTotalProduct();
      this.takeTotal();
      this.flag = true;
    } else this.flag = false;
  }


  GiveInput() {
    this.serviceSearch.TakeInput(this.input);
  }

  takeTotal() {
    this.totalInBasket = this.basketService.giveTotal();
  }
  sss(){
    console.log(inject(AuthService).takeAuth())
  }
}
