import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  PasswordForm: FormGroup;
  btn_pressed = false;
  constructor(private mService: AuthService, private fb: FormBuilder, private mRouter: Router) { }

  ngOnInit() {
    this.PasswordForm = this.fb.group({ 
      OldPassword: ['', Validators.required],
      NewPassword: ['', Validators.required],
      ConfirmNewPassword: ['', Validators.required],
     });

    }

  get getForm() {
  return this.PasswordForm.controls;
  }

  onClick() {
    this.btn_pressed = true;
    if (this.PasswordForm.invalid) {
      return;
    } else {
      this.mService.changepassword(this.PasswordForm.value.OldPassword, this.PasswordForm.value.NewPassword, this.PasswordForm.value.ConfirmNewPassword).subscribe(
        () => {
          this.mRouter.navigate(['/login']);
        }
      );
      this.PasswordForm.reset();
      this.btn_pressed = false;
    }
  }

}