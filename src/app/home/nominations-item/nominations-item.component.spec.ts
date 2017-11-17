import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationsItemComponent } from './nominations-item.component';

describe('NominationsItemComponent', () => {
  let component: NominationsItemComponent;
  let fixture: ComponentFixture<NominationsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
