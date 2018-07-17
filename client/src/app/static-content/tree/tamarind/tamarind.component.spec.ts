import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamarindComponent } from './tamarind.component';

describe('TamarindComponent', () => {
  let component: TamarindComponent;
  let fixture: ComponentFixture<TamarindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamarindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamarindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
