import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {

  constructor() { }

  onSubmit(form:any):void{
    console.log('You submitted value:', form);
  }

  ngOnInit() {
  }

}
