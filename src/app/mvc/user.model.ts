import { User } from './user';
import { UserService } from './user.service';

export class UserModel {
  private user: User;

  constructor(private api: UserService) {}

  signIn(email: string, password: string) {
    this.api.getUser(email, password).then(user => {
      this.user = user;
    });
  }
}
