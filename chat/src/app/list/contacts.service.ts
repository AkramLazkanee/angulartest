import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs'
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  headers = new HttpHeaders();

  getHeaders() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return headers;
  }
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.headers = this.getHeaders();
  }

  getContactsList(): Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.api_url + 'api/Contacts', {
      headers: this
        .headers
    })
  }

  getContactsDetails(id: number): Observable<Contact> {
    return this.http.get<Contact>(environment.api_url + 'api/Contacts/' + id, {
      headers: this
        .headers
    })
  }
  delContactsDetails(id: number): Observable<Contact> {
    return this.http.delete<Contact>(environment.api_url + 'api/Contacts/' + id, {
      headers: this
        .headers
    })
  }
  putContactsDetails(first: number, last: string, phone: number, id: number): Observable<Contact> {
    let data = { FirstName: first, LastName: last, Phone: phone};
    let string = JSON.stringify(data);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return this.http.put<Contact>(environment.api_url + 'api/Contacts/' + id, string, { headers: headers });
  }
  postContactsDetails(first: number, last: string, phone: number): Observable<Contact> {
    let data = "FirstName=" + first + "&LastName=" + last + "&Phone=" + phone;
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return this.http.post<Contact>(environment.api_url + 'api/Contacts', data, { headers: headers });
  }

}
