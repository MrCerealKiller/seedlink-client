import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { BehaviorSubject } from 'rxjs'
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User;
  private signedInSubject = new BehaviorSubject<boolean>(false);
  public connection$ = this.signedInSubject.asObservable();

  constructor(public _authService: AngularFireAuth, private _router: Router) {
    this._authService.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.signedInSubject.next(true);
      } else {
        localStorage.setItem('user', null);
        this.signedInSubject.next(false);
      }
    });
  }

  async attemptRegister(email: string, password: string, callback) {
    var that = this;
    this._authService.auth.createUserWithEmailAndPassword(email, password)
    .then(callback())
    .catch(function(error) {
      alert(error.message);
    });
  }

  async attemptLogin(email: string, password: string) {
    var that = this;
    this._authService.auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      that.signedInSubject.next(true);
      that._router.navigate(['/settings']);  // TODO: Change to dash
    })
    .catch(function(error) {
      alert(error.message);
    });
  }

  async logout(){
    await this._authService.auth.signOut();
    localStorage.removeItem('user');
    this.signedInSubject.next(false);
    this._router.navigate(['/sign-in']);
  }

  checkToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      this.user = user;
      this.signedInSubject.next(true);
      return true;
    } else {
      this.signedInSubject.next(false);
      return false;
    }
  }

  isLoggedIn() {
    return (this.user !== null);
  }
}
