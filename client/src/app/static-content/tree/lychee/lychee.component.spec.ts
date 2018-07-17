import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LycheeComponent } from './lychee.component';

describe('LycheeComponent', () => {
  let component: LycheeComponent;
  let fixture: ComponentFixture<LycheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LycheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LycheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
