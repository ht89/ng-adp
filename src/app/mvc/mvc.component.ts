import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { UserService } from './user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mvc',
  templateUrl: './mvc.component.html',
  styleUrls: ['./mvc.component.css']
})
export class MvcComponent implements OnInit {
  private model: UserModel;
  emailCtrl: FormControl = new FormControl();
  passCtrl: FormControl = new FormControl();

  constructor(api: UserService) {
    this.model = new UserModel(api);
  }

  ngOnInit() {}

  signInClick() {
    this.model.signIn(this.emailCtrl.value, this.passCtrl.value);
  }
}
