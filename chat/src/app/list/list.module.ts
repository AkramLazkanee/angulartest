import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RowComponent } from './row/row.component';
import { ContactsService } from './contacts.service';
import { ConversationsService } from './conversations.service';
import { ListRoutingModule } from './list-routing.module';
import { ConversationsListComponent } from './conversations-list/conversations-list.component';
import { ListComponent } from './list/list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ListRoutingModule
  ],
  providers: [ContactsService, ConversationsService],
  declarations: [
    ListComponent,
    RowComponent, 
    ContactsListComponent,
    ConversationsListComponent,
    ContactDetailsComponent, 
  ]
})
export class ListModule { }
