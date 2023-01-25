import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  signUpForm = new FormGroup({
    login: new FormControl('i.simagin'),
    email: new FormControl('i.simagin@mail.com'),
    password1: new FormControl('123456'),
    password2: new FormControl('123456')
  });

  readonly validator = Validators.email;

  // signUpForm = new FormGroup({
  //   login: new FormControl('i.simagin'),
  //   email: new FormControl('i.simagin@mail.com'),
  //   password1: new FormControl('123456'),
  //   password2: new FormControl('123456')
  // });

  onSubmit() {
    console.log(this.signUpForm.value.login)
    console.log(this.signUpForm.value.email)
    console.log(this.signUpForm.value.password1)
    console.log(this.signUpForm.value.password2)
  }
}
