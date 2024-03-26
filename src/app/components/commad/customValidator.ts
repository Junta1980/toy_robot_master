import { AbstractControl } from '@angular/forms';
import { robotCols, robotRow } from 'src/app/model/global';

export function customFormatValidatorFormat(control: AbstractControl): { [key: string]: any } | null {
  const value = control.value;

  if (!/^\d+,\d+,[NSWE]$/i.test(value)) {
    return { 'invalidFormat': true };
  }

  return null;
}

export function customFormatValidatorCoordinate(control: AbstractControl): { [key: string]: any } | null {
  const value = control.value;

  if (value) {
    const [x, y, f] = value ? value.trim().split(',') : '';
    if(x < 0 || x > robotCols -1){
      return { 'invalidCoordinate': true };
    }

    if(y < 0 || y > robotRow -1){
      return { 'invalidCoordinate': true };
    }

  }

  return null;
}
