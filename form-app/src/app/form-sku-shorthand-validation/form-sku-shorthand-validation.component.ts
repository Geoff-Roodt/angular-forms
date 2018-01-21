import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'form-sku-shorthand-validation',
  templateUrl: './form-sku-shorthand-validation.component.html',
  styleUrls: ['./form-sku-shorthand-validation.component.css']
})

export class FormSkuShorthandValidationComponent implements OnInit {
  myForm:FormGroup;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
  }

  onSubmit(value:string):void{
    console.log('You submitted value: ', value);
  }

  ngOnInit() {
  }

}
