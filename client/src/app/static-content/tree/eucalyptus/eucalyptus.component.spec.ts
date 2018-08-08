import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EucalyptusComponent } from './eucalyptus.component';

describe('EucalyptusComponent', () => {
  let component: EucalyptusComponent;
  let fixture: ComponentFixture<EucalyptusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EucalyptusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EucalyptusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
