import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuShorthandValidationComponent } from './form-sku-shorthand-validation.component';

describe('FormSkuShorthandValidationComponent', () => {
  let component: FormSkuShorthandValidationComponent;
  let fixture: ComponentFixture<FormSkuShorthandValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuShorthandValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuShorthandValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
