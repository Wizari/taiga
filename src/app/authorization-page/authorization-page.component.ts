import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AuthorizationPageComponent {

  profileForm = new FormGroup({
    login: new FormControl('i.simagin'),
    password: new FormControl('123456')
  });


  readonly testForm = new FormGroup({
    testValue1: new FormControl(''),
    testValue2: new FormControl(''),
  });



  onSubmit() {
    // console.log("submit")
    console.log(this.profileForm.value.login)
    console.log(this.profileForm.value.password)
  }
}
