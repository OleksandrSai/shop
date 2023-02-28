import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService, Users, BasketService } from '../index';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css'],
})
export class AuthorizedComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private basketService: BasketService
  ) {}

  user: Users[] | undefined;
  flag: boolean = false;
  subscription:Subscription | undefined;

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
    this.subscription = this.authService.BasketUser().subscribe((res: any) => {
        this.basketService.takeBasket(res);
      });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
