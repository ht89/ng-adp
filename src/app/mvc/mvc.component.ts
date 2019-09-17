import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-mvc',
  templateUrl: './mvc.component.html',
  styleUrls: ['./mvc.component.css']
})
export class MvcComponent implements OnInit {
  private model: UserModel;

  constructor(api: UserService) {
    this.model = new UserModel(api);
  }

  ngOnInit() {}

  signInClick(email: string, password: string) {
    this.model.signIn(email, password);
  }
}
