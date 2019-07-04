import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  signedIn: boolean = false;
  auth: Subscription;

  constructor(private _authService: AuthService) {
    this.auth = this._authService.connection$.subscribe(data => {
      this.signedIn = data;
    });
  }

  ngOnInit() {
  }

}
