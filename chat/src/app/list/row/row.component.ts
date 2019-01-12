import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { Conversation } from '../conversation';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input('contact') contact: Contact;
  @Input('conversation') conversation: Conversation;
  
  item;
  component;

  constructor(private ContactsService: ContactsService, private mRouter: Router) { }
  delContactsDetails(id) {
    this.ContactsService.delContactsDetails(id).subscribe();
  }
  ngOnInit() {
    this.item = this.contact ? this.contact : this.conversation;
    this.component = this.contact.FirstName ? '/list/contact' : '/list/conversations';
  }
  delete(id) {
    this.delContactsDetails(id);
  }
}
