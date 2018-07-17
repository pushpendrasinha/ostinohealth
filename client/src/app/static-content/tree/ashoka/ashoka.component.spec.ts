import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshokaComponent } from './ashoka.component';

describe('AshokaComponent', () => {
  let component: AshokaComponent;
  let fixture: ComponentFixture<AshokaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshokaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
