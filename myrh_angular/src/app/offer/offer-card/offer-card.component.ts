import { Component, Input } from '@angular/core';
import { Offer } from '../../model/offer.model';

@Component({
  selector: 'offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}
