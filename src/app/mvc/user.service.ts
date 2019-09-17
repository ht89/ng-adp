import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUser(email: string, password: string): Promise<any> {
    const p = new Promise((resolve, reject) => {
      resolve(new User(email, password));
    });

    return p;
  }
}
