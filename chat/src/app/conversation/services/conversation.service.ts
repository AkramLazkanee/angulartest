import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversation } from '../models/conversation';
import { Message } from '../models/message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  headers = this.getHeaders()

  constructor(private http:HttpClient) { }

  getHeaders():HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer O-c0pSNpqkq9KP9KJQy0yd-I37rwSofNynKED6CxQLIHwrjxcSIP_bMNNCdO8-fdgitCCjadsX93Om21eN1dVXOZMN7-ugAJhPw5dOqlVBTRTbMx6e50ZkSqr0Y9sXMyNLG92EKnWqnlxOjrI3fVvk3-sdaheuyfiVyUFAMbszjVkyj4sxFU9L5M_wx_gWtGfVfJu0oX51kWZsHM5ds6GlmhPtt-7HRcQyFshmeKo5y9ziQ1eP7FO-dP02SRWdhkwgkegiYuOHl-Kmv9M2v_ZY21kgVFUB9gCX8LhbbkUMizQ8ZQ_httBMoy9BXV4SKalrSfV-D5wIhEisyvdtKD1nLFKHjP9g7-WIWwz_YJUx54ywylztAwyC7_qiXd-2V-XgRwTIKEx-eVGi2I9hhczCB4nnlBiDbAyOP-0YaNkXrUdeXomgHMtL5g-b2R9qcWEGS7gE-nWVh7RhnbxuX9sAmpkXd_5nmdhoV9ylWCK5caO78iDp_fcSKyD8278_ME2htpYRViEy6yqtz1ZMXl_9nnfNNrXG2xJE_NtI3-yuEoLsXNDT85vDWYXzjOhd9n'
    });
    // console.log(headers)
    return headers;
  }

  getConversationMessages(convo_id):Observable<Message[]> {
    return this.http
    .get<Message[]>( environment.api_url + "api/messages/Conversation/" + convo_id, {headers: this.headers});
  }

}
