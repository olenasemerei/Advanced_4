import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss'],
})
export class Lesson04Component implements OnInit {
  public searchText = '';
  public indexEdit: number | undefined = undefined;
  public isModal = false;
  public type = 'asc';
  public type2 = 'asc';
  public type3 = 'asc';
  public newContact: phoneBook = {
    firstName: '',
    lastName: '',
    number: '',
  };

  public regExp = {
    firstName: /^[\w \-]{3,20}$/,
    lastName: /^[\w \-]{3,20}$/,
    number: /^[\d\+]{8,14}$/,
  };

  public inputWrong = {
    firstName: false,
    lastName: false,
    number: false,
  };

  public phoneBook: phoneBook[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      number: '0631111111',
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0632222222',
    },
    {
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      number: '0633333333',
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublveska',
      number: '0635555555',
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      number: '0636666666',
    },
    {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      number: '0977777777',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeSort(type: string): void {
    this.type = type;
  }

  changeSortLastName(type2: string): void {
    this.type2 = type2;
  }

  changeSortNumber(type3: string): void {
    this.type3 = type3;
  }

  addContact(): void {
    this.indexEdit = undefined;
    let key: keyof phoneBook;
    for (key in this.newContact) {
      this.newContact[key] = '';
    }
    this.isModal = true;
  }

  editContact(index: number): void {
    let key: keyof phoneBook;
    for (key in this.newContact) {
      this.newContact[key] = this.phoneBook[index][key];
      this.inputWrong[key] = false;
    }
    this.indexEdit = index;
    this.isModal = true;
  }

  deleteContact(index: number): void {
    this.phoneBook.splice(index, 1);
  }

  saveContact(): void {
    if (!this.checkInput()) {
      return;
    }
    if (this.indexEdit === undefined) {
      let newUser = {
        firstName: this.newContact.firstName,
        lastName: this.newContact.lastName,
        number: this.newContact.number,
      };
      this.phoneBook.push(newUser);
    } else {
      this.phoneBook[this.indexEdit].firstName = this.newContact.firstName;
      this.phoneBook[this.indexEdit].lastName = this.newContact.lastName;
      this.phoneBook[this.indexEdit].number = this.newContact.number;
    }
    this.isModal = false;
    this.newContact.firstName = '';
    this.newContact.lastName = '';
    this.newContact.number = '';
  }

  checkInput(): boolean {
    let key: keyof phoneBook;
    for (key in this.regExp) {
      if (this.regExp[key].test(this.newContact[key])) {
        this.inputWrong[key] = false;
      } else {
        this.inputWrong[key] = true;
        return false;
      }
    }
    return true;
  }

  clear(): void {
    this.searchText = '';
  }

  closeModal(): void {
    this.isModal = false;
  }
  clickOverlay(event: MouseEvent): void {
    if ((event.target as HTMLDivElement).classList.contains('modalOverlay')) {
      this.closeModal();
    }
  }
}

export interface phoneBook {
  firstName: string;
  lastName: string;
  number: string;
}
