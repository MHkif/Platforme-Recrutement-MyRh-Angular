import {Component, Input, OnInit} from '@angular/core';
import {OfferService} from "../../../service/offer.service";
import {JobSeekerOfferInsightsResponse,UserStatus} from "../../../model/offer.model";


@Component({
  selector: 'app-candidates-insights',
  templateUrl: './candidates-insights.component.html',
  styleUrls: ['./candidates-insights.component.css']
})
export class CandidatesInsightsComponent implements OnInit {

  candidatesOfferInsights: Array<JobSeekerOfferInsightsResponse> = [];
  candidatesOfferInsightsOriginal: Array<JobSeekerOfferInsightsResponse> = [];

  userStatusStyle ={
    ONLINE : "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
    OFFLINE : "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
    ALL : "badge badge-pill badge-info",
    BUSY : "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300",

  } ;

  @Input() companyId!: number;

  constructor(private OfferService: OfferService) {
  }

  ngOnInit(): void {
    this.companyId=1;
    if (this.companyId) {
      this.getAllCandidatesOfferInsights();
    }else{
      console.log("Company id is not set")
    }

  }

  private getAllCandidatesOfferInsights() {
    this.OfferService.getAllCandidatesOfferInsights(this.companyId).subscribe((data) => {
      console.log(data)
      this.candidatesOfferInsights = data;
      this.candidatesOfferInsightsOriginal = data;
    }, error => {
      console.log(error)
    })
  }

  filterJobApplicationsByStatus(event:any) {
    //todo : filter by status online/ offline
    const jobApplicationStatus = event.target.value as UserStatus  ;
    this.candidatesOfferInsights = this.candidatesOfferInsightsOriginal;
    console.log(jobApplicationStatus)
    if(jobApplicationStatus === UserStatus.ALL){
      console.log("all")
      return;
    }
   this.candidatesOfferInsights =  this.candidatesOfferInsights.filter((jobApplication) => {
     return jobApplication.jobSeeker_status === jobApplicationStatus
   })


  }

}

