import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicantsComponent } from './my-applicants.component';

describe('MyApplicantsComponent', () => {
  let component: MyApplicantsComponent;
  let fixture: ComponentFixture<MyApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
