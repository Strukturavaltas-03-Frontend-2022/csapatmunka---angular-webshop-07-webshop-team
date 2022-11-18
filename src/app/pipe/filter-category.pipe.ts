import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory',
})
export class FilterCategoryPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(value: T[], key: string = '', category: number = 0): T[] {
    return value.filter((item) => item[key] === category);
  }
}
