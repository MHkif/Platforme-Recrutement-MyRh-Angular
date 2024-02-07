import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  JobSeekerApplicationSocketConfigService
} from "../../../service/jobSeeker/job-application-config/job-seeker-application-socket-config.service";
import {JobApplicantRes} from "../../../model/JobApplicantRes.model";

@Component({
  selector: 'app-job-seeker-navbar',
  templateUrl: './job-seeker-navbar.component.html',
  styleUrls: ['./job-seeker-navbar.component.css']
})
export class JobSeekerNavbarComponent implements OnInit, OnDestroy {

  notifications: any[] = [];
  newNotification: boolean = false;
  jobSeekerId: number = 1;
  newNotificationObject!:any;

  constructor(
    private jobSeekerApplicationSocketService: JobSeekerApplicationSocketConfigService
  ) {
  }


  ngOnInit(): void {
    this.jobSeekerApplicationSocketService.subscribeToNotification("/topic/job_seeker/", this.jobSeekerId, () => {
    });

    this.jobSeekerApplicationSocketService.notificationsSubject.subscribe((notification) => {
      console.log("notificationsSubject")
      console.log(notification)

      this.newNotificationObject = notification as JobApplicantRes;
      console.log(this.newNotificationObject.offer.title)
      this.notifications.push(this.newNotificationObject);




      this.newNotification = true;
      setTimeout(() => {
        this.newNotification = false;
      }, 5000);

    });
  }

  ngOnDestroy(): void {
    this.jobSeekerApplicationSocketService.notificationsSubject.unsubscribe();

  }

  protected readonly Date = Date;
}
