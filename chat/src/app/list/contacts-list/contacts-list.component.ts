import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public list: Contact[];
  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.getContactsList();}

  getContactsList() {
    this.service.getContactsList().subscribe(list => this.list = list)
  }

}
