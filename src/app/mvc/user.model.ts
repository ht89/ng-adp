import { User } from './user';
import { UserService } from './user.service';

export class UserModel {
  user: User;
  // variable for the UI
  loading = false;

  constructor(private api: UserService) {}

  signIn(email: string, password: string) {
    this.loading = true;

    this.api.getUser(email, password).then(user => {
      this.user = user;

      this.loading = false;
    });
  }
}
