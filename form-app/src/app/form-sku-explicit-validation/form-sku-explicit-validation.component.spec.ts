import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuExplicitValidationComponent } from './form-sku-explicit-validation.component';

describe('FormSkuExplicitValidationComponent', () => {
  let component: FormSkuExplicitValidationComponent;
  let fixture: ComponentFixture<FormSkuExplicitValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuExplicitValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuExplicitValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
