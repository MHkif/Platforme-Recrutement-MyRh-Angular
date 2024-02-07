import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesInsightsComponent } from './candidates-insights.component';

describe('CandidatsInsightsComponent', () => {
  let component: CandidatesInsightsComponent;
  let fixture: ComponentFixture<CandidatesInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
