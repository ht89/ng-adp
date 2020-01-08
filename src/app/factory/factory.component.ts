import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { POTOFactory } from './poto-factory';
import { User } from './user';
import { HeroFactory } from './hero-factory';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    const spiderman = new HeroFactory('Peter', 100);
    spiderman.introduce();

    const superman = new HeroFactory('Clark', 100);
    superman.introduce();

    this.userService.getUser().subscribe(res => {
      // won't work althought the left-hand side of assignation is defined as User,
      // it will be removed when transpiling it to Javascript (since res is of type 'any')
      let user: User = res;
      // user.hello();

      // this works
      user = POTOFactory.buildUser(res);
      user.hello();
    });
  }
}
