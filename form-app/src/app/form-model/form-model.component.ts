import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})

export class FormModelComponent implements OnInit {
  myForm:FormGroup;
  productName:string;

  // The constructor creates a FormBuilder variable called fb to be used on the form for validation purposes
  constructor(fb:FormBuilder) {
    // Tell the form that certain fields (productName) MUST pass validation
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }

  // Log our submitted value for development purposes
  onSubmit(value:string):void{
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
