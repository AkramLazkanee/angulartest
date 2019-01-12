import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ConversationsListComponent } from './conversations-list/conversations-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ConversationDetailsComponent } from './conversation-details/conversation-details.component';

const routes: Routes = [

  {
    path: 'list', component: ListComponent,
    children: [
      
        
          { path: 'conversation/add', component: ConversationDetailsComponent },
          { path: 'contacts', component: ContactsListComponent },
          { path: 'contact/:id', component: ContactDetailsComponent },
          { path: 'conversations', component: ConversationsListComponent },
          { path: 'contacts/add', component: ContactDetailsComponent },

          // { path: '**', redirectTo: 'conversations' },
        
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
