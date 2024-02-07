import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantLayoutComponent } from './applicant-layout.component';

describe('ApplicantLayoutComponent', () => {
  let component: ApplicantLayoutComponent;
  let fixture: ComponentFixture<ApplicantLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
