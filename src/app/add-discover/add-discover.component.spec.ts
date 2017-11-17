import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscoverComponent } from './add-discover.component';

describe('AddDiscoverComponent', () => {
  let component: AddDiscoverComponent;
  let fixture: ComponentFixture<AddDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiscoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
