import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  btn_pressed = false;
  constructor(private mService: AuthService, private fb: FormBuilder, private mRouter: Router) { }

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      Email: ['', Validators.required],
      password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Phone: ['', Validators.required]
    });
  }

  get getForm() {
    return this.RegisterForm.controls;
  }

  onClick() {
    this.btn_pressed = true;
    if (this.RegisterForm.invalid) {
      return;
    } else {
      this.mService.register(this.RegisterForm.value.Email, this.RegisterForm.value.password, this.RegisterForm.value.ConfirmPassword, this.RegisterForm.value.FirstName, this.RegisterForm.value.LastName, this.RegisterForm.value.Phone).subscribe(
        () => {
          console.log("I'm here!")
          this.mRouter.navigate(['/list/contacts']);
        }
      );
      this.RegisterForm.reset();
      this.btn_pressed = false;
    }
  }

}
