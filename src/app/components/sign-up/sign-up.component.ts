import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  ip: string;
  port: string;
  agree: boolean;

  passwordType: string = 'password';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO
  }

  onEyeClick() {
    if (this.passwordType == 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

}
