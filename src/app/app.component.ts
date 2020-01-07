import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  greeting = '';
  hideAppComp = false;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {
    this.appService
      .getGreeting()
      .subscribe(greeting => (this.greeting = greeting));

    this.listenToRouterEvts();
  }

  private listenToRouterEvts() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideAppComp = event.url.search('singleton') === -1;
      }
    });
  }
}
