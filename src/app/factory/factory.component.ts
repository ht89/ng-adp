import { Component, OnInit } from '@angular/core';

import * as heroFactory from './hero-factory';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const spiderman = heroFactory.createHero('Peter', 100);
    spiderman.introduce();

    const superman = heroFactory.createHero('Clark', 100);
    superman.introduce();
  }
}
