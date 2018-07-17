import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanyanComponent } from './banyan.component';

describe('BanyanComponent', () => {
  let component: BanyanComponent;
  let fixture: ComponentFixture<BanyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
