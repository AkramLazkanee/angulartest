import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RowComponent } from './row/row.component';
import { ContactsService } from './contacts.service';
import { ConversationsService } from './conversations.service';
import { ListRoutingModule } from './list-routing.module';
import { ConversationsListComponent } from './conversations-list/conversations-list.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ],
  providers: [ContactsService, ConversationsService],
  declarations: [
    ListComponent,
    RowComponent, 
    ContactsListComponent,
    ConversationsListComponent, 
  ]
})
export class ListModule { }
