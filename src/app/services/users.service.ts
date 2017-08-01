import { Injectable } from '@angular/core';
import { User } from "../models/user";

@Injectable()
export class UsersService {

  usersStub : User[] = [
    {
      id: 1,
      familyName: 'Dupont',
      firstName: 'Celia',
      mail: 'celia@dupont.com',
      phoneNumber: '0123456789',
    },
    {
      id: 2,
      familyName: 'Dubois',
      firstName: 'Jean',
      mail: 'jean@dubois.fr',
      phoneNumber: '0123456789',
    }
  ];

  constructor() { }

  index(): User[] {
    return this.usersStub
  }

  show(id: number): User {
    return this.usersStub.filter((user) => {
      return user.id == id;
    })[0];
  }

}
