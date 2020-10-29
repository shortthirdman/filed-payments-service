import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    RadioButtonModule,
    DialogModule,
    CheckboxModule,
    CalendarModule,
    KeyFilterModule,
    InputMaskModule,
    ToastModule
  ],
  imports: [
    CommonModule
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VendorModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
        ngModule: VendorModule,
        providers: [
        ]
    };
  }
}
