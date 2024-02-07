import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { applicantStartLogin } from '../../../store/applicant/applicant.action';

@Component({
  selector: 'jobSeeker-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class JobSeekerLoginComponent implements OnInit {
  loginForm!: FormGroup;
  email_Error = '';
  password_Error = '';

  constructor(private builder: FormBuilder, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(8),
          Validators.maxLength(30),
        ])
      ),
      password: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ])
      ),
    });
  }

  onSubmit() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.store.dispatch(applicantStartLogin({ email, password }));
    } else {
      if (this.loginForm?.get('email')?.hasError('required')) {
        this.email_Error = 'Email is required.';
      } else if (this.loginForm?.get('email')?.hasError('minlength')) {
        this.email_Error = 'Email must be at least 8 characters long.';
      } else if (this.loginForm?.get('email')?.hasError('maxlength')) {
        this.email_Error = 'Email must be less than 30 characters long.';
      } else {
        this.email_Error = '';
      }

      if (this.loginForm?.get('password')?.hasError('required')) {
        this.password_Error = 'Password is required.';
      } else if (this.loginForm?.get('password')?.hasError('minlength')) {
        this.password_Error = 'Password must be at least 8 characters long.';
      } else if (this.loginForm?.get('name')?.hasError('maxlength')) {
        this.password_Error = 'Password must be less than 30 characters long.';
      } else {
        this.password_Error = '';
      }
    }
  }
}
