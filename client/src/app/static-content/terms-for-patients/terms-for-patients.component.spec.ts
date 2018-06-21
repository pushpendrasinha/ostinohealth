import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsForPatientsComponent } from './terms-for-patients.component';

describe('TermsForPatientsComponent', () => {
  let component: TermsForPatientsComponent;
  let fixture: ComponentFixture<TermsForPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsForPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsForPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
