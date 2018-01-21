import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'form-sku-builder',
  templateUrl: './form-sku-builder.component.html',
  styleUrls: ['./form-sku-builder.component.css']
})
export class FormSkuBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku':['ABC123']
    });
  }

  ngOnInit() {
  }

  onSubmit(value:string){
    console.log('You submitted value: ', value);
  }

}
