import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuCustomValidationComponent } from './form-sku-custom-validation.component';

describe('FormSkuCustomValidationComponent', () => {
  let component: FormSkuCustomValidationComponent;
  let fixture: ComponentFixture<FormSkuCustomValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuCustomValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuCustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
