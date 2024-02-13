import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { JobSeeker } from '../../../model/jobSeeker.model';
import { applicantStartRegister } from '../../../store/applicant/applicant.action';
import { AreaActivityService } from '../../../service/area-activity.service';
import { ProfileService } from '../../../service/profile.service';
import { AreaActivity } from '../../../model/areaActivity.model';
import { Profile } from '../../../model/profile.model';
// import { AreaActivityService } from '../../../service/AreaActivityService.ts';

@Component({
  selector: 'app-candidat-register',
  templateUrl: './candidat-register.component.html',
  styleUrls: ['./candidat-register.component.css'],
})
export class CandidatRegisterComponent {
  constructor(private profileService :ProfileService,private areaservice:AreaActivityService ,private builder: FormBuilder, private store: Store<AppState>) {}

  signUpForm!: FormGroup;
  first_name_Error: any;
  last_name_Error: any;
  email_Error: any;
  password_Error: any;
  confirm_pass_Error: any;
  profile_Error:any;
  areaActivity_Error:any;

  areaActivity:AreaActivity[]=[]
  profiles:Profile[]=[]

  ngOnInit(): void {
    this.signUpForm = this.builder.group({
      first_name: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ])
      ),
      last_name: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ])
      ),
      email: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ])
      ),
      areaActivity: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
        ])
      ),
      profile: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
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
    this.loadAreaActivity();
  }
  loadAreaActivity(){
    this.areaservice.louadAreaActivity().subscribe(data => {
      this.areaActivity=data.content;
    });
  }

  louadProfiles(){
    this.profileService.loadProfile(this.signUpForm.value.areaActivity).subscribe(data=>{
      this.profiles=data
      console.log("profiles :"+data.forEach.toString())

    })
  }

  
  onSubmit() {
    if (this.signUpForm.valid) {
      let jobSeeker: JobSeeker = {
        id: 0,
        first_name: this.signUpForm.value.first_name,
        last_name: this.signUpForm.value.last_name,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
        profile:this.signUpForm.value.profile,
        image: null,
        enabled: true,
      };
      if (this.signUpForm.value.confirmPassword ===  jobSeeker.password) {
        console.log("form "+this.signUpForm.value)
        this.store.dispatch(applicantStartRegister({ jobSeeker: jobSeeker }));
      } else {
        this.confirm_pass_Error = 'Mismatch Password';
      }
    }
  
      console.log('hego else')
      if (this.signUpForm?.get('first_name')?.hasError('required')) {
        this.first_name_Error = 'First name is required.';
      }
       else if (this.signUpForm?.get('first_name')?.hasError('minlength')) {
        this.first_name_Error = 'First name must be at least 8 characters long.';
      } else if (this.signUpForm?.get('first_name')?.hasError('maxlength')) {
        this.first_name_Error =
          'First name must be less than 30 characters long.';
      } else {
        this.first_name_Error ='';
      }

      if (this.signUpForm?.get('profile')?.hasError('required')) {
        this.profile_Error = 'profile is required.';
      }else{
        this.profile_Error='';
      }
      if (this.signUpForm?.get('areaActivity')?.hasError('required')) {
        this.areaActivity_Error = 'areaActivity is required.';
      }else{
        this.areaActivity_Error='';
      }


      if (this.signUpForm?.get('last_name')?.hasError('required')) {
        this.last_name_Error = 'Last name is required.';
      } else if (this.signUpForm?.get('last_name')?.hasError('minlength')) {
        this.last_name_Error = ' Last name must be at least 8 characters long.';
      } else if (this.signUpForm?.get('last_name')?.hasError('maxlength')) {
        this.last_name_Error =
          'Last name must be less than 30 characters long.';
      } else {
        this.last_name_Error = '';
      }

      if (this.signUpForm?.get('email')?.hasError('required')) {
        this.email_Error = 'Email is required.';
      } else if (this.signUpForm?.get('email')?.hasError('email')) {
        this.email_Error = 'This filed must be a valid email.';
      } else {
        this.email_Error = '';
      }

      if (this.signUpForm?.get('password')?.hasError('required')) {
        this.password_Error = 'Password is required.';
      } else if (this.signUpForm?.get('password')?.hasError('minlength')) {
        this.password_Error = 'Password must be at least 8 characters long.';
      } else if (this.signUpForm?.get('password')?.hasError('maxlength')) {
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
        this.signUpForm.value.confirmPassword !=
        this.signUpForm.value.password
      ) {
        this.confirm_pass_Error = 'Mismatch password.';
      } else {
        this.confirm_pass_Error ='';
      }
      
    }
  }
  


