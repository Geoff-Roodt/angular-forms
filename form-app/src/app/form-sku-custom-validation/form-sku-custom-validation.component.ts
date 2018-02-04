import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';

// Declare our custom validation function; the input must start with 123 to be valid
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

    // Attach our custom validation to the form.
    // Here we specify that the input is required and must pass our custom validation defined above
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, skuValidator])]
    });

    // Associate the form control to our local variable
    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value:string):void{
    console.log('You submitted value: ', value);
  }

  ngOnInit() {
  }
}
