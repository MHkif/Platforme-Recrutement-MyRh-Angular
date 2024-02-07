import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicanSideBarComponent } from './applican-side-bar.component';

describe('ApplicanSideBarComponent', () => {
  let component: ApplicanSideBarComponent;
  let fixture: ComponentFixture<ApplicanSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicanSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicanSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
