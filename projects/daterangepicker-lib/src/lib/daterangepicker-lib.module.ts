import { NgModule } from '@angular/core';
import { DaterangepickerLibComponent } from './daterangepicker-lib.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [DaterangepickerLibComponent],
  imports: [
    CommonModule
  ],
  exports: [DaterangepickerLibComponent]
})
export class DaterangepickerLibModule { }
