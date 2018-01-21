import { Component, OnInit, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'form-sku-events',
  templateUrl: './form-sku-events.component.html',
  styleUrls: ['./form-sku-events.component.css']
})

export class FormSkuEventsComponent implements OnInit {
  myForm:FormGroup;
  sku: AbstractControl;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value:string) => {
        console.log('sku changed to: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form:any) => {
        console.log('form changed to: ', form);
      }
    );
  }
  
  onSubmit(value:string):void{
    console.log('You submitted value: ', value);
  }

  ngOnInit() {
  }

}
