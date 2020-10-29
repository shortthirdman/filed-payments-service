import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorModule } from './vendor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppCoreModule { }
