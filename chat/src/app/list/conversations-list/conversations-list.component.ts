import { Component, OnInit } from '@angular/core';
import { ConversationsService } from '../conversations.service';
import { Conversation } from '../conversation';

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.css']
})
export class ConversationsListComponent implements OnInit {

  public list: Conversation[];

  constructor(private service: ConversationsService) { }

  ngOnInit() {
    this.getContactsList();
  }
  
  getContactsList() {
    this.service.getConversationsList().subscribe(list => this.list = list)
  }
}
