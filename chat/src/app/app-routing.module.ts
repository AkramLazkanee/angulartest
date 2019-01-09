import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvoComponent } from './conversation/convo/convo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', outlet: 'conversation-tab', component: ConvoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
