import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Interface/MyInterface';

HttpClient;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authToken: string = '';
  badAuth: boolean = false;
  User: Users[] | undefined;
  id: number | undefined;

  allUsers() {
    return this.http.get('https://fakestoreapi.com/users');
  }

  authUser(login: string, pass: string) {
    return this.http.post('https://fakestoreapi.com/auth/login', {
      username: login,
      password: pass,
    });
  }

  InfoAuth(user: Users[]) {
    this.User = user;
  }

  BasketUser() {
    (this.User as Users[]).forEach((element) => {
      this.id = element.id;
    });
    return this.http.get(`https://fakestoreapi.com/carts/user/${this.id}`);
  }

  todayDate(){
    let a = new Date()
    let date
    let month
    if(a.getDate()<10) date = "0"+ a.getDate()
    else date = a.getDate();
    if(a.getMonth()<10) month = "0" + (a.getMonth()+1)
    else  month = a.getMonth()
    let thisDate = `${a.getFullYear()}-${month}-${date}`
    return thisDate
  }
}
