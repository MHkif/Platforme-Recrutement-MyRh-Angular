import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { Company } from '../../../model/company.model';
import { company_signUpStart } from '../../../store/company/company.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private builder: FormBuilder, private store: Store<AppState>) {}
  signUpForm!: FormGroup;
  name_Error: string = '';
  email_Error: string = '';
  password_Error: string = '';
  confirm_pass_Error: string = '';

  ngOnInit(): void {
    this.signUpForm = this.builder.group({
      name: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ])
      ),
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
      confirmPassword: this.builder.control(
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
    if (this.signUpForm.valid) {
      let company: Company = {
        id: null,
        name: this.signUpForm.value.name,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
        image: null,
        enabled: false,
      };

      if (this.signUpForm.value.confirmPassword === company.password) {
        this.store.dispatch(company_signUpStart({ company_data: company }));
      } else {
        this.confirm_pass_Error = 'Mismatch Password';
      }
    } else {
      if (this.signUpForm?.get('name')?.hasError('required')) {
        this.name_Error = 'Name is required.';
      } else if (this.signUpForm?.get('name')?.hasError('minlength')) {
        this.name_Error = 'Name must be at least 8 characters long.';
      } else if (this.signUpForm?.get('name')?.hasError('maxlength')) {
        this.name_Error = 'Name must be less than 30 characters long.';
      } else {
        this.name_Error = '';
      }

      if (this.signUpForm?.get('email')?.hasError('required')) {
        this.email_Error = 'Email is required.';
      } else if (this.signUpForm?.get('email')?.hasError('minlength')) {
        this.email_Error = 'Email must be at least 8 characters long.';
      } else if (this.signUpForm?.get('email')?.hasError('maxlength')) {
        this.email_Error = 'Email must be less than 30 characters long.';
      } else {
        this.email_Error = '';
      }

      if (this.signUpForm?.get('password')?.hasError('required')) {
        this.password_Error = 'Password is required.';
      } else if (this.signUpForm?.get('password')?.hasError('minlength')) {
        this.password_Error = 'Password must be at least 8 characters long.';
      } else if (this.signUpForm?.get('name')?.hasError('maxlength')) {
        this.password_Error = 'Password must be less than 30 characters long.';
      } else {
        this.password_Error = '';
      }

      if (this.signUpForm?.get('confirmPassword')?.hasError('required')) {
        this.confirm_pass_Error = 'Confirm Password is required.';
      } else if (
        this.signUpForm?.get('confirmPassword')?.hasError('minlength')
      ) {
        this.confirm_pass_Error =
          'Confirm Password must be at least 8 characters long.';
      } else if (
        this.signUpForm?.get('confirmPassword')?.hasError('maxlength')
      ) {
        this.confirm_pass_Error =
          'Confirm Password must be less than 30 characters long.';
      } else if (
        this.signUpForm.value.confirm_pass_Error !=
        this.signUpForm.value.password
      ) {
        this.confirm_pass_Error = 'Mismatch password.';
      } else {
        this.confirm_pass_Error = '';
      }
    }
  }
}
