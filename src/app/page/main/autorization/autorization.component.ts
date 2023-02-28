import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService, Users } from '../index';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css'],
})
export class AutorizationComponent implements OnInit, DoCheck, OnDestroy {
  constructor(private bilder: FormBuilder,
    private AuthService: AuthService) {}

  autorization: any;
  dataUsers: Users[] | undefined;
  auth:string = this.AuthService.authToken
  error: string = ""
  subscriptionAuthUser:Subscription | undefined;
  subscriptionGetUser:Subscription | undefined;

  ngOnInit() {
    this.loadForm();
    this.getUsers();
  }

  ngDoCheck(){
    this.auth = this.AuthService.authToken
  }

  giveAllUsers(){
  this.AuthService.takeAllUsers((this.dataUsers as Users[]))
  }

  getUsers() {
    this.subscriptionGetUser = this.AuthService.allUsers().subscribe((users: any) => {
      this.dataUsers = users;
      console.log(this.dataUsers);
    });
  }

  loadForm() {
    this.autorization = this.bilder.group({
      login: this.bilder.control('johnd', [Validators.required]),
      pass: this.bilder.control('m38rmF$', [Validators.required]),
    });
  }

  authUser(userName: string, userPass: string) {
    this.giveAllUsers()
    this.subscriptionAuthUser = this.AuthService.authUser(userName, userPass).subscribe({
      next: (auth: any) => {
        this.AuthService.authToken = auth.token;
        this.whoСame(userName, userPass)
        this.auth = this.AuthService.authToken
      },
      error: ((e:any) => this.error = e.error),
    });
  }

  whoСame(userName: string, userPass: string) {
    let came = this.dataUsers?.filter((user) => user.username == userName && user.password == userPass)
    this.AuthService.InfoAuth((came as Users[]))
  }

  ngOnDestroy(): void {
    this.subscriptionAuthUser?.unsubscribe()
    this.subscriptionGetUser?.unsubscribe()
  }

}
