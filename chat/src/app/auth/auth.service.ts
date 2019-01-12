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
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')/*.set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.token)*/;
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

  register(Email: string, Password: string, ConfirmPassword: string, FirstName: string, LastName: string, Phone: number): Observable<boolean> {
    let data = "Email=" + Email + "&Password=" + Password + "&ConfirmPassword=" + ConfirmPassword + "&FirstName=" + FirstName + "&LastName=" + LastName + "&Phone=" + Phone;
    return this.http.post<boolean>(environment.api_url + 'api/Account/Register', data, { headers: this.headers });

  }

  changepassword(OldPassword: string, NewPassword: string, ConfirmPassword: string): Observable<boolean> {
    let data = "OldPassword=" + OldPassword + "&NewPassword=" + NewPassword + "&ConfirmPassword=" + ConfirmPassword; 
    return this.http.post<boolean>(environment.api_url + 'api/Account/ChangePassword', data, { headers: this.headers });

  }

  logout() {
    this.sharedService.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  getAccessToken(username: string, password: string): Observable<Token> {
    let data = "grant_type=password&username=" + username + "&password=" + password;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return this.http.post<Token>(environment.api_url + 'Token', data, { headers: headers }
    );
  }
}
