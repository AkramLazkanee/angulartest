import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  btn_pressed = false;

  constructor(private mService: AuthService, private fb: FormBuilder, private mRouter: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get getForm() {
    return this.loginForm.controls;
  }

  onClick() {
    this.btn_pressed = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.mService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
        () => {
          this.mRouter.navigate(['/list/contacts']);
        }
      );
      this.loginForm.reset();
      this.btn_pressed = false;
    }
  }
}
