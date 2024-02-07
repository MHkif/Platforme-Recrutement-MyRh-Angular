import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferStatus, PageOffers } from '../../../model/offer.model';
import { OfferService } from '../../../service/offer.service';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-admin-offer-list',
  templateUrl: './admin-offer-list.component.html',
  styleUrls: ['./admin-offer-list.component.css'],
})
export class AdminOfferListComponent implements OnInit {
  offers!: Observable<PageOffers>;
  currentPage!: number;
  size!: number;
  errorMsg!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private offerService: OfferService
  ) {}
  ngOnInit(): void {
    // this.router.navigate(['offers'], {
    //   queryParams: {
    //     page: 1,
    //   },
    // });
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] || 1;
      this.size = params['size'] || 5;
      let queries = new Map<string, string>();
      for (let key in params) {
        queries.set(key, params[key]);
      }
      this.getOffers(queries);
    });
  }

  protected readonly OfferStatus = OfferStatus;
  getOffers(queries: Map<string, string>) {
    this.offers = this.offerService.getAll(queries).pipe(
      catchError((err) => {
        console.error('Error in get All Offers : ', err);
        this.errorMsg = err.message;
        return throwError(() => err);
      })
    );
  }
  changeVisibility(offerId: number, event: any) {
    console.log(offerId, event.target.value);
    this.offerService.changeVisibility(offerId, event.target.value).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToAdminCompetitions(page: any): void {
    const queryParams = { page: page }; // Assuming this.page is your parameter value
    this.router.navigate(['offers'], { queryParams: queryParams });
  }

  getTotalPagesArray(listOffers: PageOffers): number[] {
    return Array.from(
      { length: listOffers.totalPages },
      (_, index) => index + 1
    );
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }
}
