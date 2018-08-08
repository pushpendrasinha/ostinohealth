import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheeshamComponent } from './sheesham.component';

describe('SheeshamComponent', () => {
  let component: SheeshamComponent;
  let fixture: ComponentFixture<SheeshamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheeshamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheeshamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
