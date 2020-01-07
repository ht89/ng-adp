import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MySingleton } from './my-singleton';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css'],
  providers: []
})
export class SingletonComponent implements OnInit {
  greeting = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService
      .getGreeting()
      .subscribe(greeting => (this.greeting = greeting));

    // won't work
    // const mySingleton = new MySingleton();

    // work
    // const mySingleton = MySingleton.getInstance();
  }

  onInputChange() {
    this.appService.setGreeting(this.greeting);
  }
}
