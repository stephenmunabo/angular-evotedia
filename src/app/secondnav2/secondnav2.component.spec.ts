import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondnav2Component } from './secondnav2.component';

describe('Secondnav2Component', () => {
  let component: Secondnav2Component;
  let fixture: ComponentFixture<Secondnav2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondnav2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondnav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
