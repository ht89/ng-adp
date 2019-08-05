import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

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
  }

  onInputChange() {
    console.log(this.greeting);
    this.appService.setGreeting(this.greeting);
  }
}
