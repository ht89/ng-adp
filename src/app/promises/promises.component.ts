import { Component, OnInit } from '@angular/core';
import { IMDBAPIService } from './imdb-api.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
  providers: [IMDBAPIService]
})
export class PromisesComponent implements OnInit {
  constructor(private imdbApi: IMDBAPIService) {}

  ngOnInit() {
    this.imdbApi.fetchOneById(1).then(res => console.log(res));

    this.calTotal().then(res => console.log(res));
  }

  private calTotal(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const nums = [1, 2, 3];

        const total = nums.reduce((acc, currentVal) => acc + currentVal, 0);
        resolve(total);
      }, 1000);
    });

    return promise;
  }
}
