import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamunComponent } from './jamun.component';

describe('JamunComponent', () => {
  let component: JamunComponent;
  let fixture: ComponentFixture<JamunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
