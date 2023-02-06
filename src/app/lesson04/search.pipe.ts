import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from './lesson04.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: phoneBook[], field: string): any {
    if (!value) return [];
    if(!field) return value;
    return value.filter(phoneBook=> phoneBook.firstName.toLowerCase().includes(field.toLowerCase()) || phoneBook.lastName.toLowerCase().includes(field.toLowerCase()) || phoneBook.number.toLowerCase().includes(field.toLowerCase()) )
  }

}

