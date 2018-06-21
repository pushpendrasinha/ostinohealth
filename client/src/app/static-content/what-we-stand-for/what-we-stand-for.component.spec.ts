import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeStandForComponent } from './what-we-stand-for.component';

describe('WhatWeStandForComponent', () => {
  let component: WhatWeStandForComponent;
  let fixture: ComponentFixture<WhatWeStandForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeStandForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeStandForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
