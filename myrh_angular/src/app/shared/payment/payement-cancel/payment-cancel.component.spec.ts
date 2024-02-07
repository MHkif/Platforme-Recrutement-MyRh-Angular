import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCancelComponent } from './payment-cancel.component';

describe('PayementCancelComponent', () => {
  let component: PaymentCancelComponent;
  let fixture: ComponentFixture<PaymentCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
