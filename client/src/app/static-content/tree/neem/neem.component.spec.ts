import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeemComponent } from './neem.component';

describe('NeemComponent', () => {
  let component: NeemComponent;
  let fixture: ComponentFixture<NeemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
