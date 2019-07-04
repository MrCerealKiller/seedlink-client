import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';

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
  agree: boolean = false;

  passwordType: string = 'password';

  constructor(private _validateService: ValidateService,
              private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.agree) {
      var user = {
        username: this.name,
        email: this.email,
        password: this.password
      };
      let res = this._validateService.validateRegister(user);
      if (res.isErr) {
        alert(res.msg);
      } else {
        var that = this;
        this._authService.attemptRegister(this.email, this.password, function(user) {
          
          that._router.navigate(['/settings']);  // TODO: Change to dash
        });
      }
    } else {
      alert('You must agree to the terms of service');
    }
  }

  onEyeClick() {
    if (this.passwordType == 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

}
