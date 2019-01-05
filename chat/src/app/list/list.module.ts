import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RowComponent } from './row/row.component';
import { ContactsService } from './contacts.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ContactsService],
  declarations: [ContactsListComponent, RowComponent]
})
export class ListModule { }