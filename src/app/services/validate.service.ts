import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    var err = "";

    // Username Field
    const reUser = /^\w+$/;
    if (user.username == undefined || user.username == null) {
      err += "You must choose a username.";
    } else if (!reUser.test(user.username)) {
      err += "Your username should include only letters, numbers, and underscores.";
    }

    if (err.length) {
      return {isErr: true, msg: err};
    }

    // Email Field
    // Email Regaular Expression Template
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (user.email == undefined || user.email == null) {
      err += "You must input your email address.";
    } else if (!reEmail.test(user.email.toLowerCase())) {
      err += "The given email is not valid.";
    }

    if (err.length) {
      return {isErr: true, msg: err};
    }

    // Password
    const rePass1 = /[0-9]/;
    const rePass2 = /[a-z]/;
    const rePass3 = /[A-Z]/;
    if (user.password == undefined || user.password == null) {
      err += "You must choose a password.";
    } else if (user.password.length < 8) {
      err += "Your password should be at least 8 characters.";
    } else if (!rePass1.test(user.password) ||
               !rePass2.test(user.password) ||
               !rePass3.test(user.password)) {
      err += "Your password must contain at least one lowercase letter, uppercase letter, and number.";
    }

    if (err.length) {
      return {isErr: true, msg: err};
    }

    return {isErr: false, msg: "Success"};
  }
}
