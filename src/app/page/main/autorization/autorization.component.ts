import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, Users } from '../index';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css'],
})
export class AutorizationComponent {
  constructor(private bilder: FormBuilder, private AuthService: AuthService) {}

  autorization: any;
  dataUsers: Users[] | undefined;
  auth = this.AuthService.authToken
  successfulAuth: Users[] | undefined;
  error: string = ""

  ngOnInit() {
    this.loadForm();
    this.getUsers();
  }

  ngDoCheck(){
    this.auth = this.AuthService.authToken
  }

  getUsers() {
    this.AuthService.allUsers().subscribe((users: any) => {
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
    this.AuthService.authUser(userName, userPass).subscribe({
      next: (auth: any) => {
        this.AuthService.authToken = auth.token;
        this.whoСame(userName, userPass)
        this.auth = this.AuthService.authToken
      },
      error: ((e:any) => this.error = e.error),
    });
  }

  whoСame(userName: string, userPass: string) {
    let came = this.dataUsers?.filter(
      (user) => user.username == userName && user.password == userPass
    )
    this.AuthService.User = came

    // if (came) this.AuthService.User = came;
  }

  // checkAutorization() {
  //   this.dataUsers?.forEach((el: any) => {
  //     if (
  //       el.email == this.autorization.controls.email.value &&
  //       el.password == this.autorization.controls.pass.value
  //     ) {
  //       this.goodAuth = true;
  //       this.badAuth = false;
  //       this.successfulAuth = el;
  //     } else {
  //       this.badAuth = true;
  //     }
  //   });
  // }
}
