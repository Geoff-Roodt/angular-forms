import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'form-sku-explicit-validation',
  templateUrl: './form-sku-explicit-validation.component.html',
  styleUrls: ['./form-sku-explicit-validation.component.css']
})
export class FormSkuExplicitValidationComponent implements OnInit {
  myForm:FormGroup;
  sku:AbstractControl;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value:string):void{
    console.log('You submitted value: ', value);
  }

  ngOnInit() {
  }

}
