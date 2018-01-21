import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormSkuBuilderComponent } from './form-sku-builder/form-sku-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
