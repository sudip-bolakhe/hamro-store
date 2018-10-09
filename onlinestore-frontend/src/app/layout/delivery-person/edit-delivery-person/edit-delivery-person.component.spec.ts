import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryPersonComponent } from './edit-delivery-person.component';

describe('EditDeliveryPersonComponent', () => {
  let component: EditDeliveryPersonComponent;
  let fixture: ComponentFixture<EditDeliveryPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeliveryPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
