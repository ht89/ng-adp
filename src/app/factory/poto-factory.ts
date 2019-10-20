import { User } from './user';

export class POTOFactory {
  // build a user from api response
  static buildUser(jsonUser: any): User {
    return new User(jsonUser.firstName, jsonUser.lastName);
  }
}
