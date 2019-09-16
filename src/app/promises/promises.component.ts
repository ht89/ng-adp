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

    this.getRandNum()
      .then(res => console.log(`Success: ${res}`))
      .catch(err => console.error(`Error: ${err}`));

    this.changeStateOnlyOnce()
      .then(res => console.log('Promised resolved'))
      .catch(err => console.error('Promise rejected'));

    // this.chainPromise();

    this.chainPromise2();
  }

  private getRandNum(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // get a number between 1 and 10 inclusive
        const randNum = Math.floor(Math.random() * 10 + 1);

        if (randNum % 2) {
          resolve(randNum);
        } else {
          reject(randNum);
        }
      }, 1000);
    });

    return promise;
  }

  private changeStateOnlyOnce(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      resolve();
      reject();
    });

    return promise;
  }

  private chainPromise() {
    const successHandler = val => {
      console.log(val);

      return val + 1;
    };

    const p = new Promise((resolve, reject) => {
      resolve(0);
    })
      .then(successHandler)
      .then(successHandler)
      .then(successHandler);
  }
  private chainPromise2() {
    const incr = val => {
      console.log(val);

      return ++val;
    };

    let outerResolve;
    const firstPromise = new Promise((resolve, reject) => {
      outerResolve = resolve;
    });

    firstPromise.then(incr);

    const secondPromise = firstPromise.then(incr);
    const thirdPromise = secondPromise.then(incr);

    secondPromise.then(incr);
    firstPromise.then(incr);
    thirdPromise.then(incr);

    outerResolve(0);
  }
}
