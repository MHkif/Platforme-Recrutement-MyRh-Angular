import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanySubscriptionServiceService} from 'src/app/service/company/company-subscription-service.service';
import {CompanySubscribeRequest, SubscriptionStatus} from "../../../model/company.model";

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit, OnDestroy {

  // if the company success with the payment, we will show this component and i change the value of the variable showModal to true
  //I will get the company id from the query params and then send it to the backend so i can update the subscription of the company
  isPaymentSuccess: boolean = false;
  companyRequest! : CompanySubscribeRequest ;

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private route : Router,
    private companySubscriptionServiceService: CompanySubscriptionServiceService,
  ) {
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.companyRequest={
        companyId: params['id'] ,
        subscriptionStatus:  params['subscriptionStatus'] as SubscriptionStatus,
        token: "empty_for_now"
      }
    });
  }


  changeSubscriptionStatus() {
    //: get the company id from the query params
    if(!this.isPaymentSuccess){
      //: send the company id to the backend
      this.companySubscriptionServiceService.subscribe(this.companyRequest).subscribe(
        (data) => {
          this.isPaymentSuccess = true;
          this.route.navigate(['/company/dashboard']);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }



  }
}
