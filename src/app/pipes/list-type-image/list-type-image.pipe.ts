import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listTypeImage'
})
export class ListTypeImagePipe implements PipeTransform {

  transform(value: string, listType: string): string {
    return listType === 'list' ? value : value.split('.')[0] + '-grid.' + value.split('.')[1];
  }

}
