import { Component, DoCheck } from '@angular/core';
import { BasketService } from 'src/app/Service/basket.service';
import { AuthService, Users } from '../index';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css'],
})
export class AuthorizedComponent {
  constructor(
    private authService: AuthService,
    private basketService: BasketService
  ) {}

  user: Users[] | undefined;
  flag: boolean = false;

  ngOnInit() {
    this.user = this.authService.User;
    this.fillBasket();
  }

  LogOut() {
    this.authService.authToken = '';
    this.basketService.takeBasket([]);
  }

  fillBasket() {
    if (!this.basketService.giveBasket().length)
      this.authService.BasketUser().subscribe((res: any) => {
        this.basketService.takeBasket(res);
        console.log(res);
      });
  }
}
