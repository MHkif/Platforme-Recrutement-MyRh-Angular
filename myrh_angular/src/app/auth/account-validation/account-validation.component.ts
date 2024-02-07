import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { ResponseHttp } from '../../model/responseData.model';
import { Company } from '../../model/company.model';
import { CompanyService } from '../../service/company.service';
import { AppState } from '../../store/state/app.state';

@Component({
  selector: 'app-account-validation',
  templateUrl: './account-validation.component.html',
  styleUrls: ['./account-validation.component.css'],
})
export class AccountValidationComponent implements OnInit {
  response!: ResponseHttp;
  status!: number | null | undefined;
  company!: Company | null;
  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.companyService
      .confirmAccount(this.route.snapshot.params['token'])
      .subscribe({
        next: (res: ResponseHttp) => {
          this.response = res;
          console.log('Res : ', this.response);
          this.status = res.statusCode;
        },
        error: (err: any) => {
          console.error('Error ', err);
          this.response = err.error;
          console.log('Message : ', err.error.message);
          this.status = err.error.statusCode;
        },
      });
  }

  sendToken() {
    this.companyService
      .sendVerification(this.route.snapshot.params['token'])
      .subscribe({
        next: (res: ResponseHttp) => {
          console.log('Res : ', res);
        },
        error: (err: any) => {
          console.error('Error : sendVerification :  ', err);
          console.log('sendVerification  : ', err.error.message);
        },
      });
  }
}
