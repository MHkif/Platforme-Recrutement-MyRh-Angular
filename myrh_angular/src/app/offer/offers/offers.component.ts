import { Component } from '@angular/core';
import { PageOffers } from '../../model/offer.model';
import { Observable, catchError, throwError } from 'rxjs';
import { OfferService } from '../../service/offer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent {
  offers!: Observable<PageOffers>;

  errorMsg!: string;
  currentPage!: number;
  size!: number;
  showModal = false;
  isNew = false;
  checkMember = false;

  constructor(
    private service: OfferService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: {
        page: 1,
      },
    });
  
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] || 0;
      this.size = params['size'] || 5;
      let queries = new Map<string, string>();
      for (let key in params) {
        queries.set(key, params[key]);
      }
      this.getOffers(queries);
    });
  }

  getOffers(queries: Map<string, string>) {
    this.offers = this.service.getAll(queries).pipe(
      catchError((err) => {
        console.error('Error in get All Offers : ', err);
        this.errorMsg = err.message;
        return throwError(() => err);
      })
    );
  }

  navigateToAdminCompetitions(page: any): void {
    const queryParams = { page: page }; // Assuming this.page is your parameter value
    this.router.navigate([], { queryParams: queryParams });
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
