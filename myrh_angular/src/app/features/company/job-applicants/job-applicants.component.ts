import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError } from 'rxjs';

import {
  CompanyJobApplicantReq,
  JobApplicant,
  JobApplicantStatus,
} from '../../../model/jobApplicant.model';
import { JobApplicantService } from '../../../service/job-applicant.service';
import { AppState } from '../../../store/state/app.state';

@Component({
  selector: 'app-job-applicants',
  templateUrl: './job-applicants.component.html',
  styleUrls: ['./job-applicants.component.css'],
})
export class JobApplicantsComponent implements OnInit {
  jobApplicants: Array<JobApplicant> = [];
  protected readonly JobApplicantStatus = JobApplicantStatus;

  companyId = 1;
  constructor(
    private jobApplicantService: JobApplicantService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.log("this is the child component")
    this.jobApplicantService.getAllByCompany(this.companyId).subscribe({
      next: (res: Array<JobApplicant>) => {
        this.jobApplicants = res;
        console.log('JobApplicants  : ', this.jobApplicants);
      },
      error: (err: any) => {
        console.error('Error ', err);
        console.log('Message : ', err.error.message);
      },
    });
  }

  onApplyStatus(jobApplicant: JobApplicant, statusEvent: any) {
    console.log('Status 1 : ', jobApplicant.status);
    console.log('Event  : ', statusEvent.target.value);

    let jobApplicantReq: CompanyJobApplicantReq = {
      companyId: this.companyId,
      offerId: jobApplicant.offer.id,
      jobSeekerId: jobApplicant.jobSeeker.id,
      status: statusEvent.target.value,
    };

    this.jobApplicantService.updateStatus(jobApplicantReq).subscribe({
      next: (res) => {
        console.log('Res  : ', res);
      },
      error: (err: any) => {
        console.error('Error ', err);
        console.log('Message : ', err.error.message);
      },
    });

    console.log('Status 2 : ', jobApplicantReq.status);
  }
}
