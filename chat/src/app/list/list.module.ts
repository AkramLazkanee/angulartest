import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ConversationsService } from './conversations.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ConversationsService],
  declarations: [ContactsListComponent]
})
export class ListModule { }
