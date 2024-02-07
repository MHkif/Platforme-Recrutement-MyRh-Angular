import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfferListComponent } from './admin-offer-list.component';

describe('AdminOfferListComponent', () => {
  let component: AdminOfferListComponent;
  let fixture: ComponentFixture<AdminOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOfferListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
