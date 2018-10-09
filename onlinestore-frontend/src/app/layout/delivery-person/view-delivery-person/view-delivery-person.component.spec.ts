import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliveryPersonComponent } from './view-delivery-person.component';

describe('ViewDeliveryPersonComponent', () => {
  let component: ViewDeliveryPersonComponent;
  let fixture: ComponentFixture<ViewDeliveryPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeliveryPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
