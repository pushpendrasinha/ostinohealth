import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDoctorsComponent } from './for-doctors.component';

describe('ForDoctorsComponent', () => {
  let component: ForDoctorsComponent;
  let fixture: ComponentFixture<ForDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
