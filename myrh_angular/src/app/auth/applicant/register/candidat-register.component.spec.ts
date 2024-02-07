import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatRegisterComponent } from './candidat-register.component';

describe('RegisterComponent', () => {
  let component: CandidatRegisterComponent;
  let fixture: ComponentFixture<CandidatRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
