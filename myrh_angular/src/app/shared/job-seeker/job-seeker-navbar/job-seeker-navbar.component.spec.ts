import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerNavbarComponent } from './job-seeker-navbar.component';

describe('JobSeekerNavbarComponent', () => {
  let component: JobSeekerNavbarComponent;
  let fixture: ComponentFixture<JobSeekerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSeekerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
