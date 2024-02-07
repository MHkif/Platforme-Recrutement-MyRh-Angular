import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferHolderComponent } from './offer-holder.component';

describe('OfferHolderComponent', () => {
  let component: OfferHolderComponent;
  let fixture: ComponentFixture<OfferHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
