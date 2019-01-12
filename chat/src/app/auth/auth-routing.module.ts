import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          {path: 'changepassword', component: ChangepasswordComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
