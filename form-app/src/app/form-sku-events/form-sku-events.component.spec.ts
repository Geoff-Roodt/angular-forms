import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuEventsComponent } from './form-sku-events.component';

describe('FormSkuEventsComponent', () => {
  let component: FormSkuEventsComponent;
  let fixture: ComponentFixture<FormSkuEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
