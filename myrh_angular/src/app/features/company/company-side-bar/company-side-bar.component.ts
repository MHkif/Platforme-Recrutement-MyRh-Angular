import { Component, OnInit } from '@angular/core';
import { Company } from '../../../model/company.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';

@Component({
  selector: 'app-company-side-bar',
  templateUrl: './company-side-bar.component.html',
  styleUrls: ['./company-side-bar.component.css'],
})
export class CompanySideBarComponent implements OnInit {
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
          console.log('Company : ', state.company)
        )
      );
    console.log('Company Side bar: ', this.company);
    console.log('isLogged Side bar : ', this.isLogged);
  }
}
