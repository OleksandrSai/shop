import { Component, DoCheck } from '@angular/core';
import { AuthService, Users } from '../index';


@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent {
  constructor(private authService:AuthService){}

  user:Users[] | undefined;

  ngOnInit(){
  this.user = this.authService.User
  }
  LogOut(){
    this.authService.authToken = ""
  }



}
