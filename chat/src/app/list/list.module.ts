import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RowComponent } from './row/row.component';
import { ContactsService } from './contacts.service';
import { ConversationsService } from './conversations.service';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  providers:[ContactsService,ConversationsService],
  declarations: [ContactsListComponent, RowComponent]
})
export class ListModule { }
