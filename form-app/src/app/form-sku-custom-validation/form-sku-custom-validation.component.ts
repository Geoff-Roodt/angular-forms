import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'form-sku-custom-validation',
  templateUrl: './form-sku-custom-validation.component.html',
  styleUrls: ['./form-sku-custom-validation.component.css']
})

export class FormSkuCustomValidationComponent implements OnInit {
  myForm:FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value:string):void{
    console.log('You submitted value: ', value);
  }

  ngOnInit() {
  }
}
