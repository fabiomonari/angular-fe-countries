import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], filterText: string): any[] {
    if (!items) return [];
    if (!filterText) return items;

    return items.filter((it) => {
      return it.name.toLowerCase().includes(filterText.toLowerCase());
    });
  }
}
