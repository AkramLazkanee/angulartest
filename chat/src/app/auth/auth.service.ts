import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from './token';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders();
  loggedInUser: Token = new Token();
  isLoggedIn = false;

  getHeaders() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')/*.set('Authorization', 'Bearer ' + this.loggedInUser.token)*/;
    return headers;
  }
  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();
  }

  login(username: string, password: string): Observable<boolean> {
    return this.getAccessToken(username, password)
      .pipe(
        map(at => {
          let tokenResponse: Token;
          tokenResponse = at;
          if (tokenResponse) {
            this.loggedInUser.userName = tokenResponse.userName;
            this.loggedInUser.access_token = tokenResponse.access_token;
            this.loggedInUser[".expires"] = new Date(tokenResponse[".expires"]);
            this.isLoggedIn = true;
            localStorage.setItem("current_user", JSON.stringify(this.loggedInUser));
            return true;
          }
          else {
            this.isLoggedIn = false;
            localStorage.removeItem("currentUser");
            return false;
          }
        })
      );
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  getAccessToken(username: string, password: string): Observable<Token> {
    let data = "grant_type = password&username=" + username + "&password" + password;
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.loggedInUser.access_token);
    return this.http.post<Token>(environment.api_url + 'Token', data, { headers: headers }
    );
  }
}
