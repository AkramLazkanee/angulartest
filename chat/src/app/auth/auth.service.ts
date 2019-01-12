import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../token';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders();

  getHeaders() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')/*.set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.token)*/;
    return headers;
  }
  constructor(private http: HttpClient,private sharedService: SharedService) {
    this.headers = this.getHeaders();
  }

  login(username: string, password: string): Observable<boolean> {
    return this.getAccessToken(username, password)
      .pipe(
        map(at => {
          let tokenResponse: Token;
          tokenResponse = at;
          if (tokenResponse) {
            this.sharedService.loggedInUser.access_token = tokenResponse.access_token;
            this.sharedService.loggedInUser.userName = tokenResponse.userName;
            this.sharedService.loggedInUser.FirstName = tokenResponse.FirstName;
            this.sharedService.loggedInUser.LastName = tokenResponse.LastName;
            this.sharedService.loggedInUser[".expires"] = new Date(tokenResponse[".expires"]);
            this.sharedService.isLoggedIn = true;
            localStorage.setItem("current_user", JSON.stringify(this.sharedService.loggedInUser));
            return true;
          }
          else {
            this.sharedService.isLoggedIn = false;
            localStorage.removeItem("currentUser");
            return false;
          }
        })
      );
  }

  register(username: string, password: string, ConfirmPassword: string, FirstName: string, LastName: string, phone: number): Observable<boolean> {
    let data = "username=" + username + "&password=" + password + "&ConfirmPassword=" + ConfirmPassword + "&FirstName=" + FirstName + "&LastName=" + LastName + "&phone=" + phone;
    return this.http.post<boolean>(environment.api_url + 'api/Account/Register', data, { headers: this.headers });

  }

  logout() {
    this.sharedService.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  getAccessToken(username: string, password: string): Observable<Token> {
    let data = "grant_type=password&username=" + username + "&password=" + password;
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return this.http.post<Token>(environment.api_url + 'Token', data, { headers: headers }
    );
  }
}
