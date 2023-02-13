import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import {Users} from "../Interface/MyInterface"

HttpClient

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  authToken: string = "";
  badAuth: boolean = false;
  User:Users[] | undefined;


  allUsers(){
    return this.http.get("https://fakestoreapi.com/users")
  }

  authUser(login:string, pass:string){
  return this.http.post("https://fakestoreapi.com/auth/login",{username: login, password: pass})
}

InfoAuth(user:Users[]){
  this.User = user;
}

}
