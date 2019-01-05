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
}
