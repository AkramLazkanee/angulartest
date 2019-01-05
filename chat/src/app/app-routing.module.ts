import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './list/contacts-list/contacts-list.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'list',component: ContactsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
