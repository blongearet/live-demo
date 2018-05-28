import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return value;
    if (typeof value !== 'string') {
      throw new Error('The given value is not a string ... cannot reverse it 🚀')
    }
    return value
      .split('')
      .reverse()
      .join('');
  }

}
