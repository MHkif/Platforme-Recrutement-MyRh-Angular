import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerDashboardComponent } from './job-seeker-dashboard.component';

describe('DashboardComponent', () => {
  let component: JobSeekerDashboardComponent;
  let fixture: ComponentFixture<JobSeekerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSeekerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
