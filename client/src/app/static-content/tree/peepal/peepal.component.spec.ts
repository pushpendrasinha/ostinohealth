import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepalComponent } from './peepal.component';

describe('PeepalComponent', () => {
  let component: PeepalComponent;
  let fixture: ComponentFixture<PeepalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeepalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeepalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
