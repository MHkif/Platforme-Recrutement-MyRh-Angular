import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: JobSeekerLoginComponent;
  let fixture: ComponentFixture<JobSeekerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobSeekerLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobSeekerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
