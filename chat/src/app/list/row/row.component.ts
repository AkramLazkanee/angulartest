import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { Conversation } from '../conversation';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input('contact') contact: Contact;
  @Input('conversation') conversation: Conversation;
  item;
  constructor() { }

  ngOnInit() {
    this.item = this.contact ? this.contact : this.conversation;
    // console.log(this.item);

  }

}
