import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GulmoharComponent } from './gulmohar.component';

describe('GulmoharComponent', () => {
  let component: GulmoharComponent;
  let fixture: ComponentFixture<GulmoharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GulmoharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GulmoharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
