import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-timeouts',
  templateUrl: './timeouts.component.html',
  styleUrls: ['./timeouts.component.css']
})
export class TimeoutsComponent implements OnInit {
  constructor(private api: ApiService) {
    let timeout;

    const sub = this.api.get()
      .subscribe(res => {
        console.log(res);
        clearTimeout(timeout);
      });

    timeout = setTimeout(() => {
      if (sub) {
        sub.unsubscribe();
      }
    }, 1000);
  }

  ngOnInit() {}
}
