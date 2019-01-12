import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ConversationsListComponent } from './conversations-list/conversations-list.component';
import { ConvoComponent } from '../conversation/convo/convo.component';

const routes: Routes = [

  {
    path: 'list', component: ListComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'contacts', outlet:"list",  component: ContactsListComponent },
          { path: 'conversations', component: ConversationsListComponent},
          // { path: 'conversations/:id', component: ConvoComponent,outlet:'convo'},
          // { path: '**', redirectTo: 'conversations' },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
