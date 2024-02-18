import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { JobSeeker } from '../../../model/jobSeeker.model';
import { JobApplicantRes } from '../../../model/JobApplicantRes.model';
import { JobSeekerApplicationSocketConfigService } from '../../../service/jobSeeker/job-application-config/job-seeker-application-socket-config.service';

@Component({
  selector: 'app-applican-side-bar',
  templateUrl: './applican-side-bar.component.html',
  styleUrls: ['./applican-side-bar.component.css'],
})
export class ApplicanSideBarComponent implements OnInit {
  applicant!: JobSeeker | null;
  isLogged!: boolean | null;
  notifications: any[] = [];
  newNotification: boolean = false;
  jobSeekerId!: number;
  newNotificationObject!: any;

  constructor(
    private store: Store<AppState>,
    private jobSeekerApplicationSocketService: JobSeekerApplicationSocketConfigService
  ) {}

  ngOnInit(): void {
    this.store.select('applicantAuth').subscribe(
      (state) => (
        (this.isLogged = state.isLogged),
        (this.applicant = state.applicant),
        (this.jobSeekerId = state.applicant?.id as number),
        // console.log('State :', state),
        console.log(
          'isLogged  : ',
          this.isLogged,
          ', Applicant :',
          this.applicant
        )
      )
    );
    this.jobSeekerApplicationSocketService.subscribeToNotification(
      '/topic/job_seeker/',
      this.jobSeekerId,
      () => {}
    );

    this.jobSeekerApplicationSocketService.notificationsSubject.subscribe(
      (notification) => {
        console.log('notificationsSubject');
        console.log(notification);

        this.newNotificationObject = notification as JobApplicantRes;
        console.log(this.newNotificationObject.offer.title);
        this.notifications.push(this.newNotificationObject);

        this.newNotification = true;
        setTimeout(() => {
          this.newNotification = false;
        }, 5000);
      }
    );
  }

  ngOnDestroy(): void {
    this.jobSeekerApplicationSocketService.notificationsSubject.unsubscribe();
  }

  protected readonly Date = Date;
}
