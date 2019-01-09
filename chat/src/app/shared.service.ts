import { Injectable } from '@angular/core';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  loggedInUser: Token = new Token();
  isLoggedIn = false;

  constructor() {

    let user = localStorage.getItem('current_user');

    if (user) {
      user = JSON.parse(user);
      this.loggedInUser.access_token = user.access_token;
      this.loggedInUser.userName = user.userName;
      this.loggedInUser[".expires"] = new Date(user[".expires"]);
      this.isLoggedIn = true;
    }

  }
}
