import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, field: string, value: string): any[] {
    if (!items) {
      console.log('si items' + items);

      return [];
    }

    if (!value) {
      console.log('ASDASDASD' + items);

      return items;
    }

    const myPattern = new RegExp(value, 'i');
    return items.filter(it => it[field].match(myPattern));
  }
}
