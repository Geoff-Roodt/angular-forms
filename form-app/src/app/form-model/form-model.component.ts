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

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }

  onSubmit(value:string):void{
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
