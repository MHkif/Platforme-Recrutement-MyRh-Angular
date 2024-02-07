import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../service/offer.service';
import { Company } from '../../../model/company.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css'],
})
export class CompanyDashboardComponent {
  // :   PDR-46-avoir-des-statistiques-des-offres-demploi-par-candidats
  company!: Company | null;
  isLogged!: boolean | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('companyAuth')
      .subscribe(
        (state) => (
          (this.company = state.company),
          (this.isLogged = state.isLogged),
          console.log('Company Dashboard: ', state.company)
        )
      );
    this.isLogged = true;
    console.log('isLogged Dashboard : ', this.isLogged);
  }
}
