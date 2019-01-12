import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UserBarComponent } from './user-bar/user-bar.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, UserBarComponent, ChangepasswordComponent]
})
export class AuthModule { }
