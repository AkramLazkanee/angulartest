import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  headers = new HttpHeaders();
  // loggedInUser: loggedInUser = new loggedInUser();
  isLoggedIn = false;

  getHeaders() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')/*.set('Authorization', 'Bearer ' + this.loggedInUser.token)*/;
    return headers;
  }
  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();
  }
  getContactsList(): Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.api_url + 'api/Contacts', {
      headers: this
        .headers
    })
  }
}
