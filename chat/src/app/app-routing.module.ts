import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvoComponent } from './conversation/convo/convo.component';
import { UserBarComponent } from './auth/user-bar/user-bar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', outlet: 'conversation-tab', component: ConvoComponent },
  { path: '', outlet: 'user-tab', component: UserBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
