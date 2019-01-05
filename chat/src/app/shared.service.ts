import { Injectable } from '@angular/core';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  loggedInUser: Token = new Token();
  isLoggedIn = false;
  
  constructor() { }
}
