import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { Conversation } from './conversation';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  headers = new HttpHeaders();

  getHeaders() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return headers;
  }
  constructor(private http: HttpClient,private sharedService: SharedService) {
    this.headers = this.getHeaders();
  }
  getConversationsList(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(environment.api_url + 'api/Conversations', {
      headers: this
        .headers
    })
  }
  getConversationsDetails(id: number): Observable<Conversation> {
    return this.http.get<Conversation>(environment.api_url + 'api/Conversations/' + id, {
      headers: this
        .headers
    })
  }

  putConversationsDetails(first: number, id: number): Observable<Conversation> {
    let data = "Name=" + first +"&Id=" + id ;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return this.http.put<Conversation>(environment.api_url + 'api/Conversations/' + id, data, { headers: headers });
  }
  postConversationsDetails(first: number): Observable<Conversation> {
    let data = "Name=" + first ;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', 'Bearer ' + this.sharedService.loggedInUser.access_token);
    return this.http.post<Conversation>(environment.api_url + 'api/Conversations', data, { headers: headers });
  }
}
