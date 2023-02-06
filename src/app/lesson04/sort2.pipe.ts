import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from './lesson04.component';

@Pipe({
  name: 'Sort2Pipe'
})

export class Sort2Pipe implements PipeTransform {

  transform(phoneBook: phoneBook[], sort: string): any {
    if(!phoneBook) return [];
    if(!sort) return phoneBook;

    if(sort === 'asc') {
      return phoneBook.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
    }
    return phoneBook.sort((a, b) => (a.lastName < b.lastName) ?  1 : ((a.lastName > b.lastName) ? -1 : 0))
  }

}
