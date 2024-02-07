import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../../service/offer.service';
import { Company } from '../../model/company.model';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  isCompany!: boolean;
  searchForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private service: OfferService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select('companyAuth')
      .subscribe((state) => (this.isCompany = state.isLogged));
    this.searchForm = this.builder.group({
      mot_cle: this.builder.control(''),
      city: this.builder.control(''),
      level: this.builder.control(''),
      activity: this.builder.control(''),
      job: this.builder.control(''),
    });
  }

  onSearch() {
    const hasEmptyFields =
      this.searchForm.value.mot_cle.trim() === '' &&
      this.searchForm.value.city.trim() === '' &&
      this.searchForm.value.level.trim() === '' &&
      this.searchForm.value.activity.trim() === '' &&
      this.searchForm.value.job.trim() === '';

    if (hasEmptyFields) {
      alert('At least one field is required.');
    } else {
     

      const searchMap: Map<string, string> = new Map([
        ['title', this.searchForm.value.mot_cle],
        ['city', this.searchForm.value.city],
        ['level', this.searchForm.value.level],
        ['domain', this.searchForm.value.activity],
        ['job', this.searchForm.value.job],
      ]);
      const queryParams = {
        page: 1,
        size: 5,
        title: this.searchForm.value.mot_cle,
        city: this.searchForm.value.city,
        level: this.searchForm.value.level,
        domain: this.searchForm.value.activity,
      };
      this.router.navigate(['/offers'], {
        queryParams,
        queryParamsHandling: 'merge',
      });
    }
  }
}
