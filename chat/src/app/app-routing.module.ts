import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBarComponent } from './auth/user-bar/user-bar.component';
import { ConvoComponent } from './conversation/convo/convo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', outlet: 'conversation-tab', component: ConvoComponent },
  { path: '', outlet: 'user-tab', component: UserBarComponent },
  { path: 'list/conversations/:id', component: ConvoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
