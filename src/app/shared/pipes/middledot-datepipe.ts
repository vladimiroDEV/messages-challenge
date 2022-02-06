import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'middledotDate',
})
export class MiddledotDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, 'dd/MM/yyyy \u00b7 hh:mm'); //u2022 - bold version
  }
}
